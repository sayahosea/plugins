import { PluginCard } from "../components/PluginCard.tsx";

export default function Home() {
	return(
		<section class="max-h-screen flex flex-col">
			<div class="navbar bg-base-300 shadow-sm hidden lg:block">
				<a
					class="btn btn-ghost text-xl"
					href="https://hosea.dev"
				>Home</a>
			</div>

			<div class="h-screen flex mt-8 lg:mt-0 md:items-center justify-center">
				<div class="mx-8 lg:mx-0">
					<h1 class="text-5xl">Plugins</h1>
					<p class="text-xl">🇮🇩 I STAND WITH THE PROTESTORS.</p>
					<p class="text-xl mt-2 mb-8">These are plugins made by me.</p>

					<div class="flex space-x-8">
						<PluginCard
							name={ "ReduceMobs" }
							description={ "Paper plugin to reduce mobs spawning using percentage. Supports >= 1.21." }
						/>
					</div>
				</div>
			</div>

			<div class="block lg:hidden">
				<div class="dock bg-base-300">
					<a href="https://hosea.dev">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
						<span class="dock-label">Home</span>
					</a>

					<a class="dock-active" href="https://plugins.hosea.dev">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>
						<span class="dock-label">Plugins</span>
					</a>
				</div>
			</div>
		</section>
	);
}
