import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function PluginCard(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<div class="card bg-base-300 md:w-96 shadow-sm">
			<figure>
				<img
					src={ `/logo/${ props.name }.png` }
					alt={ `${ props.name } Logo` }
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{ props.name }</h2>
				<p>{ props.description }</p>
				<div class="card-actions">
					<a
						class="btn btn-info"
						href="https://github.com/sayahosea/reducemobs"
						rel="noreferrer"
						target="_blank"
					>GitHub</a>
				</div>
			</div>
		</div>
	);
}