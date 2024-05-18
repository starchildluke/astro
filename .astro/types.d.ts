declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"lists": {
"about-you-video-games.md": {
	id: "about-you-video-games.md";
  slug: "about-you-video-games";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"acceptable-volume-numbers.md": {
	id: "acceptable-volume-numbers.md";
  slug: "acceptable-volume-numbers";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"animalympics-athletes.md": {
	id: "animalympics-athletes.md";
  slug: "animalympics-athletes";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"artistic-inspirations.md": {
	id: "artistic-inspirations.md";
  slug: "artistic-inspirations";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"computer-words.md": {
	id: "computer-words.md";
  slug: "computer-words";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"favourite-animals.md": {
	id: "favourite-animals.md";
  slug: "favourite-animals";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"favourite-words.md": {
	id: "favourite-words.md";
  slug: "favourite-words";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"its-binary-time.md": {
	id: "its-binary-time.md";
  slug: "its-binary-time";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"list-of-ai-use-cases.md": {
	id: "list-of-ai-use-cases.md";
  slug: "list-of-ai-use-cases";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"list-of-citrus-culvitars-and-hybrids.md": {
	id: "list-of-citrus-culvitars-and-hybrids.md";
  slug: "list-of-citrus-culvitars-and-hybrids";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"list-of-favourite-airports.md": {
	id: "list-of-favourite-airports.md";
  slug: "list-of-favourite-airports";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"list-of-favourite-scents.md": {
	id: "list-of-favourite-scents.md";
  slug: "list-of-favourite-scents";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"media-interests.md": {
	id: "media-interests.md";
  slug: "media-interests";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"musical-inspirations.md": {
	id: "musical-inspirations.md";
  slug: "musical-inspirations";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"my-favourite-ducks.md": {
	id: "my-favourite-ducks.md";
  slug: "my-favourite-ducks";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"my-video-game-console-history.md": {
	id: "my-video-game-console-history.md";
  slug: "my-video-game-console-history";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"short-rpgs.md": {
	id: "short-rpgs.md";
  slug: "short-rpgs";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
"sporting-inspirations.md": {
	id: "sporting-inspirations.md";
  slug: "sporting-inspirations";
  body: string;
  collection: "lists";
  data: any
} & { render(): Render[".md"] };
};
"mlog": {
"mlog-13-11-2023.md": {
	id: "mlog-13-11-2023.md";
  slug: "mlog-13-11-2023";
  body: string;
  collection: "mlog";
  data: any
} & { render(): Render[".md"] };
"mlog-31-10-2023.md": {
	id: "mlog-31-10-2023.md";
  slug: "mlog-31-10-2023";
  body: string;
  collection: "mlog";
  data: any
} & { render(): Render[".md"] };
"mlog-5-11-2023.md": {
	id: "mlog-5-11-2023.md";
  slug: "mlog-5-11-2023";
  body: string;
  collection: "mlog";
  data: any
} & { render(): Render[".md"] };
"mlog-march-2024.md": {
	id: "mlog-march-2024.md";
  slug: "mlog-march-2024";
  body: string;
  collection: "mlog";
  data: any
} & { render(): Render[".md"] };
};
"morsels": {
"morsel-1.md": {
	id: "morsel-1.md";
  slug: "morsel-1";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-10.md": {
	id: "morsel-10.md";
  slug: "morsel-10";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-2.md": {
	id: "morsel-2.md";
  slug: "morsel-2";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-3.md": {
	id: "morsel-3.md";
  slug: "morsel-3";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-4.md": {
	id: "morsel-4.md";
  slug: "morsel-4";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-5.md": {
	id: "morsel-5.md";
  slug: "morsel-5";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-6.md": {
	id: "morsel-6.md";
  slug: "morsel-6";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-7.md": {
	id: "morsel-7.md";
  slug: "morsel-7";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-8.md": {
	id: "morsel-8.md";
  slug: "morsel-8";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
"morsel-9.md": {
	id: "morsel-9.md";
  slug: "morsel-9";
  body: string;
  collection: "morsels";
  data: any
} & { render(): Render[".md"] };
};
"music": {
"1nstabeats.md": {
	id: "1nstabeats.md";
  slug: "1nstabeats";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"31.md": {
	id: "31.md";
  slug: "31";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"addicted.md": {
	id: "addicted.md";
  slug: "addicted";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"alonetime.md": {
	id: "alonetime.md";
  slug: "alonetime";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"astro-fox.md": {
	id: "astro-fox.md";
  slug: "astro-fox";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"boas-festas-2.md": {
	id: "boas-festas-2.md";
  slug: "boas-festas-2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"boas-festas.md": {
	id: "boas-festas.md";
  slug: "boas-festas";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"bowsertape.md": {
	id: "bowsertape.md";
  slug: "bowsertape";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"bowsertape2.md": {
	id: "bowsertape2.md";
  slug: "bowsertape2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"bowsertape3.md": {
	id: "bowsertape3.md";
  slug: "bowsertape3";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"bt4.md": {
	id: "bt4.md";
  slug: "bt4";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"cast-members-only.md": {
	id: "cast-members-only.md";
  slug: "cast-members-only";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"celestial-jackal.md": {
	id: "celestial-jackal.md";
  slug: "celestial-jackal";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"chaos-wolf.md": {
	id: "chaos-wolf.md";
  slug: "chaos-wolf";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"cold-turkey-leftovers-vol-2.md": {
	id: "cold-turkey-leftovers-vol-2.md";
  slug: "cold-turkey-leftovers-vol-2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"cold-turkey-leftovers.md": {
	id: "cold-turkey-leftovers.md";
  slug: "cold-turkey-leftovers";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"corona-coyote.md": {
	id: "corona-coyote.md";
  slug: "corona-coyote";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"daredevil.md": {
	id: "daredevil.md";
  slug: "daredevil";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"desert-goose.md": {
	id: "desert-goose.md";
  slug: "desert-goose";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"drfts.md": {
	id: "drfts.md";
  slug: "drfts";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"dxsprtng-gds.md": {
	id: "dxsprtng-gds.md";
  slug: "dxsprtng-gds";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"erebos.md": {
	id: "erebos.md";
  slug: "erebos";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"felt-cute-wont-delete-later-x.md": {
	id: "felt-cute-wont-delete-later-x.md";
  slug: "felt-cute-wont-delete-later-x";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"fl96.md": {
	id: "fl96.md";
  slug: "fl96";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"gengartape.md": {
	id: "gengartape.md";
  slug: "gengartape";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"gngr-iii.md": {
	id: "gngr-iii.md";
  slug: "gngr-iii";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"gngr2.md": {
	id: "gngr2.md";
  slug: "gngr2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"justice-peace.md": {
	id: "justice-peace.md";
  slug: "justice-peace";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"legacy-2.md": {
	id: "legacy-2.md";
  slug: "legacy-2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"lying-floaters.md": {
	id: "lying-floaters.md";
  slug: "lying-floaters";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"madeira.md": {
	id: "madeira.md";
  slug: "madeira";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"meridian-falcon.md": {
	id: "meridian-falcon.md";
  slug: "meridian-falcon";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"microcosm-ii.md": {
	id: "microcosm-ii.md";
  slug: "microcosm-ii";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"microcosm.md": {
	id: "microcosm.md";
  slug: "microcosm";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"monolith.md": {
	id: "monolith.md";
  slug: "monolith";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"mumbo-jumbo.md": {
	id: "mumbo-jumbo.md";
  slug: "mumbo-jumbo";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"nighttime.md": {
	id: "nighttime.md";
  slug: "nighttime";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"nomad.md": {
	id: "nomad.md";
  slug: "nomad";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"noquest-ii.md": {
	id: "noquest-ii.md";
  slug: "noquest-ii";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"noquest.md": {
	id: "noquest.md";
  slug: "noquest";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"notime.md": {
	id: "notime.md";
  slug: "notime";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"notime2.md": {
	id: "notime2.md";
  slug: "notime2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"notime25.md": {
	id: "notime25.md";
  slug: "notime25";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"notime3.md": {
	id: "notime3.md";
  slug: "notime3";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"nrth1-2.md": {
	id: "nrth1-2.md";
  slug: "nrth1-2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"ode-to-the-jumper-king.md": {
	id: "ode-to-the-jumper-king.md";
  slug: "ode-to-the-jumper-king";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"old-beat-conceptions.md": {
	id: "old-beat-conceptions.md";
  slug: "old-beat-conceptions";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"pulsar-penguin.md": {
	id: "pulsar-penguin.md";
  slug: "pulsar-penguin";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"quarantine-sessions.md": {
	id: "quarantine-sessions.md";
  slug: "quarantine-sessions";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"scammers.md": {
	id: "scammers.md";
  slug: "scammers";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"slalom.md": {
	id: "slalom.md";
  slug: "slalom";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"space-harrier.md": {
	id: "space-harrier.md";
  slug: "space-harrier";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"sporting-goods-ii.md": {
	id: "sporting-goods-ii.md";
  slug: "sporting-goods-ii";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"strrloops-1.md": {
	id: "strrloops-1.md";
  slug: "strrloops-1";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"strrloops-2.md": {
	id: "strrloops-2.md";
  slug: "strrloops-2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"the-black-nerd-beat-tape.md": {
	id: "the-black-nerd-beat-tape.md";
  slug: "the-black-nerd-beat-tape";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"venomtape.md": {
	id: "venomtape.md";
  slug: "venomtape";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"venomtape2.md": {
	id: "venomtape2.md";
  slug: "venomtape2";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"vnm-tayp-3.md": {
	id: "vnm-tayp-3.md";
  slug: "vnm-tayp-3";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"were-talking-danger.md": {
	id: "were-talking-danger.md";
  slug: "were-talking-danger";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"worlds.md": {
	id: "worlds.md";
  slug: "worlds";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
};
"posts": {
"1-vs-10-000.md": {
	id: "1-vs-10-000.md";
  slug: "1-vs-10-000";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"1-year-later.md": {
	id: "1-year-later.md";
  slug: "1-year-later";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"10-inspiring-creatives-2017.md": {
	id: "10-inspiring-creatives-2017.md";
  slug: "10-inspiring-creatives-2017";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"1001-movies-you-must-see-before-you-die-2008-edition.md": {
	id: "1001-movies-you-must-see-before-you-die-2008-edition.md";
  slug: "1001-movies-you-must-see-before-you-die-2008-edition";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"100th-blog-post.md": {
	id: "100th-blog-post.md";
  slug: "100th-blog-post";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2017-needs-brevity-nuance.md": {
	id: "2017-needs-brevity-nuance.md";
  slug: "2017-needs-brevity-nuance";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"2024-patience-assertiveness.md": {
	id: "2024-patience-assertiveness.md";
  slug: "2024-patience-assertiveness";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"24-hour-virus.md": {
	id: "24-hour-virus.md";
  slug: "24-hour-virus";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"32.md": {
	id: "32.md";
  slug: "32";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"4-article-ideas-the-read.md": {
	id: "4-article-ideas-the-read.md";
  slug: "4-article-ideas-the-read";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"69-simple-pleasures.md": {
	id: "69-simple-pleasures.md";
  slug: "69-simple-pleasures";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"a-note-on-some-notes-on-writing.md": {
	id: "a-note-on-some-notes-on-writing.md";
  slug: "a-note-on-some-notes-on-writing";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"a-poem-about-how-search-engines-cant-interpret-poems.md": {
	id: "a-poem-about-how-search-engines-cant-interpret-poems.md";
  slug: "a-poem-about-how-search-engines-cant-interpret-poems";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ai-is-a-lot-like-an-orange.md": {
	id: "ai-is-a-lot-like-an-orange.md";
  slug: "ai-is-a-lot-like-an-orange";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ai-lower-inertia-getting-started.md": {
	id: "ai-lower-inertia-getting-started.md";
  slug: "ai-lower-inertia-getting-started";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ai-should-be-a-last-resort.md": {
	id: "ai-should-be-a-last-resort.md";
  slug: "ai-should-be-a-last-resort";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"another-week-in-lisbon-2023.md": {
	id: "another-week-in-lisbon-2023.md";
  slug: "another-week-in-lisbon-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"aoty-2016.md": {
	id: "aoty-2016.md";
  slug: "aoty-2016";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"aoty-2021.md": {
	id: "aoty-2021.md";
  slug: "aoty-2021";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"aoty-2022.md": {
	id: "aoty-2022.md";
  slug: "aoty-2022";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"aoty-2023.md": {
	id: "aoty-2023.md";
  slug: "aoty-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"back-on-twitter.md": {
	id: "back-on-twitter.md";
  slug: "back-on-twitter";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"bad-boys-for-years.md": {
	id: "bad-boys-for-years.md";
  slug: "bad-boys-for-years";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beached.md": {
	id: "beached.md";
  slug: "beached";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"being-black-in-digital-marketing-2023.md": {
	id: "being-black-in-digital-marketing-2023.md";
  slug: "being-black-in-digital-marketing-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beyond-tired-3.md": {
	id: "beyond-tired-3.md";
  slug: "beyond-tired-3";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beyond-tired-4.md": {
	id: "beyond-tired-4.md";
  slug: "beyond-tired-4";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beyond-tired-5.md": {
	id: "beyond-tired-5.md";
  slug: "beyond-tired-5";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beyond-tired-6.md": {
	id: "beyond-tired-6.md";
  slug: "beyond-tired-6";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beyond-tired-part-2.md": {
	id: "beyond-tired-part-2.md";
  slug: "beyond-tired-part-2";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"beyond-tired.md": {
	id: "beyond-tired.md";
  slug: "beyond-tired";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"black-and-tired.md": {
	id: "black-and-tired.md";
  slug: "black-and-tired";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"black-panther-and-therapy.md": {
	id: "black-panther-and-therapy.md";
  slug: "black-panther-and-therapy";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"blackness.md": {
	id: "blackness.md";
  slug: "blackness";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"blogging-as-self-expression.md": {
	id: "blogging-as-self-expression.md";
  slug: "blogging-as-self-expression";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"blogging-gratitude.md": {
	id: "blogging-gratitude.md";
  slug: "blogging-gratitude";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"blogs-and-hats.md": {
	id: "blogs-and-hats.md";
  slug: "blogs-and-hats";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boats-storms-rockets.md": {
	id: "boats-storms-rockets.md";
  slug: "boats-storms-rockets";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"boom-tetris-for-jeff.md": {
	id: "boom-tetris-for-jeff.md";
  slug: "boom-tetris-for-jeff";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"brief-linkedin-thoughts-ai.md": {
	id: "brief-linkedin-thoughts-ai.md";
  slug: "brief-linkedin-thoughts-ai";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"ceci-nest-pas-un-blog.md": {
	id: "ceci-nest-pas-un-blog.md";
  slug: "ceci-nest-pas-un-blog";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"connections.md": {
	id: "connections.md";
  slug: "connections";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"covid-19.md": {
	id: "covid-19.md";
  slug: "covid-19";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"deleting-twitter.md": {
	id: "deleting-twitter.md";
  slug: "deleting-twitter";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"dont-delete-your-old-work.md": {
	id: "dont-delete-your-old-work.md";
  slug: "dont-delete-your-old-work";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"eight.md": {
	id: "eight.md";
  slug: "eight";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"emptygold-blogger.md": {
	id: "emptygold-blogger.md";
  slug: "emptygold-blogger";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"everyones-a-writer.md": {
	id: "everyones-a-writer.md";
  slug: "everyones-a-writer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"failure.md": {
	id: "failure.md";
  slug: "failure";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"fave-albums-2020.md": {
	id: "fave-albums-2020.md";
  slug: "fave-albums-2020";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"feeling-guilty-for-pursuing-your-passions.md": {
	id: "feeling-guilty-for-pursuing-your-passions.md";
  slug: "feeling-guilty-for-pursuing-your-passions";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"fifth-year-professional-seo.md": {
	id: "fifth-year-professional-seo.md";
  slug: "fifth-year-professional-seo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"first-year-professional-seo.md": {
	id: "first-year-professional-seo.md";
  slug: "first-year-professional-seo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"fourth-year-professional-seo.md": {
	id: "fourth-year-professional-seo.md";
  slug: "fourth-year-professional-seo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"future-coca-cola-slogans-ai.md": {
	id: "future-coca-cola-slogans-ai.md";
  slug: "future-coca-cola-slogans-ai";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"future-job-web-historian.md": {
	id: "future-job-web-historian.md";
  slug: "future-job-web-historian";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"gains.md": {
	id: "gains.md";
  slug: "gains";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"get-a-website.md": {
	id: "get-a-website.md";
  slug: "get-a-website";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"halt-and-make-fire.md": {
	id: "halt-and-make-fire.md";
  slug: "halt-and-make-fire";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"have-you-heard-of-codeswitching.md": {
	id: "have-you-heard-of-codeswitching.md";
  slug: "have-you-heard-of-codeswitching";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"hayfever-and-histamines.md": {
	id: "hayfever-and-histamines.md";
  slug: "hayfever-and-histamines";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"headless-chickens.md": {
	id: "headless-chickens.md";
  slug: "headless-chickens";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-astro-changed-my-web-life.md": {
	id: "how-astro-changed-my-web-life.md";
  slug: "how-astro-changed-my-web-life";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-i-display-my-last-fm-top-1000-artists.md": {
	id: "how-i-display-my-last-fm-top-1000-artists.md";
  slug: "how-i-display-my-last-fm-top-1000-artists";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"how-much-do-my-blogs-cost.md": {
	id: "how-much-do-my-blogs-cost.md";
  slug: "how-much-do-my-blogs-cost";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"i-also-love-my-website.md": {
	id: "i-also-love-my-website.md";
  slug: "i-also-love-my-website";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"i-am.md": {
	id: "i-am.md";
  slug: "i-am";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"i-started-a-linkblog.md": {
	id: "i-started-a-linkblog.md";
  slug: "i-started-a-linkblog";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"if-nobody-listened.md": {
	id: "if-nobody-listened.md";
  slug: "if-nobody-listened";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"im-racially-tired.md": {
	id: "im-racially-tired.md";
  slug: "im-racially-tired";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"introducing-ralts.md": {
	id: "introducing-ralts.md";
  slug: "introducing-ralts";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"its-not-computer-science.md": {
	id: "its-not-computer-science.md";
  slug: "its-not-computer-science";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"j-dilla-influence-modern-drummer.md": {
	id: "j-dilla-influence-modern-drummer.md";
  slug: "j-dilla-influence-modern-drummer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"jamiroquai-rock-dust-light-star-review.md": {
	id: "jamiroquai-rock-dust-light-star-review.md";
  slug: "jamiroquai-rock-dust-light-star-review";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"kamala-harris-is-still-a-cop.md": {
	id: "kamala-harris-is-still-a-cop.md";
  slug: "kamala-harris-is-still-a-cop";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"keep-writing-anyway.md": {
	id: "keep-writing-anyway.md";
  slug: "keep-writing-anyway";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"khruangbin-and-federer.md": {
	id: "khruangbin-and-federer.md";
  slug: "khruangbin-and-federer";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"last-donut-of-the-night-when-federer-dilla-united-for-1-weekend.md": {
	id: "last-donut-of-the-night-when-federer-dilla-united-for-1-weekend.md";
  slug: "last-donut-of-the-night-when-federer-dilla-united-for-1-weekend";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"letterboxd-year-review-2022.md": {
	id: "letterboxd-year-review-2022.md";
  slug: "letterboxd-year-review-2022";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"letterboxd-year-review-2023.md": {
	id: "letterboxd-year-review-2023.md";
  slug: "letterboxd-year-review-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"link-dump-1.md": {
	id: "link-dump-1.md";
  slug: "link-dump-1";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"meta-meta-blogging.md": {
	id: "meta-meta-blogging.md";
  slug: "meta-meta-blogging";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-50-favourite-albums-of-2012.md": {
	id: "my-50-favourite-albums-of-2012.md";
  slug: "my-50-favourite-albums-of-2012";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-album-of-the-year-list-2014.md": {
	id: "my-album-of-the-year-list-2014.md";
  slug: "my-album-of-the-year-list-2014";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-big-pokemon-week.md": {
	id: "my-big-pokemon-week.md";
  slug: "my-big-pokemon-week";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-favourite-albums-of-the-year-2011.md": {
	id: "my-favourite-albums-of-the-year-2011.md";
  slug: "my-favourite-albums-of-the-year-2011";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-five-favourite-video-games-of-all-time.md": {
	id: "my-five-favourite-video-games-of-all-time.md";
  slug: "my-five-favourite-video-games-of-all-time";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-idea-debt.md": {
	id: "my-idea-debt.md";
  slug: "my-idea-debt";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-love-of-sony-hardware-design.md": {
	id: "my-love-of-sony-hardware-design.md";
  slug: "my-love-of-sony-hardware-design";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-new-obsession-is-sega.md": {
	id: "my-new-obsession-is-sega.md";
  slug: "my-new-obsession-is-sega";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-phone-history.md": {
	id: "my-phone-history.md";
  slug: "my-phone-history";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-record-store-day.md": {
	id: "my-record-store-day.md";
  slug: "my-record-store-day";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-review-of-2017.md": {
	id: "my-review-of-2017.md";
  slug: "my-review-of-2017";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"my-week-in-lisbon.md": {
	id: "my-week-in-lisbon.md";
  slug: "my-week-in-lisbon";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"new-normal.md": {
	id: "new-normal.md";
  slug: "new-normal";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"night-off.md": {
	id: "night-off.md";
  slug: "night-off";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"no-reason-to-embrace-ai-in-seo.md": {
	id: "no-reason-to-embrace-ai-in-seo.md";
  slug: "no-reason-to-embrace-ai-in-seo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"nyt-first-said-visualisation.md": {
	id: "nyt-first-said-visualisation.md";
  slug: "nyt-first-said-visualisation";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"open-offices-are-overrated.md": {
	id: "open-offices-are-overrated.md";
  slug: "open-offices-are-overrated";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"post-it-note-directories.md": {
	id: "post-it-note-directories.md";
  slug: "post-it-note-directories";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"prince-purple-a-visited-css.md": {
	id: "prince-purple-a-visited-css.md";
  slug: "prince-purple-a-visited-css";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"probably-autistic.md": {
	id: "probably-autistic.md";
  slug: "probably-autistic";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"prompt-engineering.md": {
	id: "prompt-engineering.md";
  slug: "prompt-engineering";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"proust-questionnaire-2020.md": {
	id: "proust-questionnaire-2020.md";
  slug: "proust-questionnaire-2020";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"proust-questionnaire.md": {
	id: "proust-questionnaire.md";
  slug: "proust-questionnaire";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"public-health.md": {
	id: "public-health.md";
  slug: "public-health";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"rip-mj-8-years-on.md": {
	id: "rip-mj-8-years-on.md";
  slug: "rip-mj-8-years-on";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"roger-federer-numbers-game.md": {
	id: "roger-federer-numbers-game.md";
  slug: "roger-federer-numbers-game";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"second-year-professional-seo.md": {
	id: "second-year-professional-seo.md";
  slug: "second-year-professional-seo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"seo-of-pokemon-nicknames.md": {
	id: "seo-of-pokemon-nicknames.md";
  slug: "seo-of-pokemon-nicknames";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"seoicism.md": {
	id: "seoicism.md";
  slug: "seoicism";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"site-redesign.md": {
	id: "site-redesign.md";
  slug: "site-redesign";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"social-anxiety.md": {
	id: "social-anxiety.md";
  slug: "social-anxiety";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"some-brief-thoughts-on-robots-txt.md": {
	id: "some-brief-thoughts-on-robots-txt.md";
  slug: "some-brief-thoughts-on-robots-txt";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"some-brief-thoughts-on-search.md": {
	id: "some-brief-thoughts-on-search.md";
  slug: "some-brief-thoughts-on-search";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"some-caveats-to-seo-and-web-perf.md": {
	id: "some-caveats-to-seo-and-web-perf.md";
  slug: "some-caveats-to-seo-and-web-perf";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"somebody-on-life-learning.md": {
	id: "somebody-on-life-learning.md";
  slug: "somebody-on-life-learning";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"speeches-thanks.md": {
	id: "speeches-thanks.md";
  slug: "speeches-thanks";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"still-elephant.md": {
	id: "still-elephant.md";
  slug: "still-elephant";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"sustained-grief.md": {
	id: "sustained-grief.md";
  slug: "sustained-grief";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"talk-work-think-different-thanks-web.md": {
	id: "talk-work-think-different-thanks-web.md";
  slug: "talk-work-think-different-thanks-web";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-colour-of-pi.md": {
	id: "the-colour-of-pi.md";
  slug: "the-colour-of-pi";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-exclusive-website.md": {
	id: "the-exclusive-website.md";
  slug: "the-exclusive-website";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-last-5-games-of-the-2017-australian-open.md": {
	id: "the-last-5-games-of-the-2017-australian-open.md";
  slug: "the-last-5-games-of-the-2017-australian-open";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-luke-100.md": {
	id: "the-luke-100.md";
  slug: "the-luke-100";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-meaning-of-life.md": {
	id: "the-meaning-of-life.md";
  slug: "the-meaning-of-life";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"the-problem-with-google-it.md": {
	id: "the-problem-with-google-it.md";
  slug: "the-problem-with-google-it";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"they-dont-see-us-as-human.md": {
	id: "they-dont-see-us-as-human.md";
  slug: "they-dont-see-us-as-human";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"things-that-ai-isnt.md": {
	id: "things-that-ai-isnt.md";
  slug: "things-that-ai-isnt";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"things-to-remember-for-2023.md": {
	id: "things-to-remember-for-2023.md";
  slug: "things-to-remember-for-2023";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"third-year-professional-seo.md": {
	id: "third-year-professional-seo.md";
  slug: "third-year-professional-seo";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"this-is-my-content-creation-flow.md": {
	id: "this-is-my-content-creation-flow.md";
  slug: "this-is-my-content-creation-flow";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"to-be-childlike-and-not-childish.md": {
	id: "to-be-childlike-and-not-childish.md";
  slug: "to-be-childlike-and-not-childish";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"today-is-a-special-day.md": {
	id: "today-is-a-special-day.md";
  slug: "today-is-a-special-day";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"trolls-pills.md": {
	id: "trolls-pills.md";
  slug: "trolls-pills";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"twitter-lists-reduce-following-count.md": {
	id: "twitter-lists-reduce-following-count.md";
  slug: "twitter-lists-reduce-following-count";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"unusual-side-effect.md": {
	id: "unusual-side-effect.md";
  slug: "unusual-side-effect";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"vicuna-made-me-laugh.md": {
	id: "vicuna-made-me-laugh.md";
  slug: "vicuna-made-me-laugh";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"videos-ive-been-watching-to-keep-me-going.md": {
	id: "videos-ive-been-watching-to-keep-me-going.md";
  slug: "videos-ive-been-watching-to-keep-me-going";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"we-are-not-data-points.md": {
	id: "we-are-not-data-points.md";
  slug: "we-are-not-data-points";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"we-need-to-use-the-lang-attribute-more.md": {
	id: "we-need-to-use-the-lang-attribute-more.md";
  slug: "we-need-to-use-the-lang-attribute-more";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"weather-beaten.md": {
	id: "weather-beaten.md";
  slug: "weather-beaten";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"what-are-your-most-used-apps.md": {
	id: "what-are-your-most-used-apps.md";
  slug: "what-are-your-most-used-apps";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"whats-the-obsession-with-folding-phone.md": {
	id: "whats-the-obsession-with-folding-phone.md";
  slug: "whats-the-obsession-with-folding-phone";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"why-do-rich-people-make-poor-decisions.md": {
	id: "why-do-rich-people-make-poor-decisions.md";
  slug: "why-do-rich-people-make-poor-decisions";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"you-dont-have-to-learn-python-but-it-might-help.md": {
	id: "you-dont-have-to-learn-python-but-it-might-help.md";
  slug: "you-dont-have-to-learn-python-but-it-might-help";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
"you-rocked-my-world-you-know-you-did.md": {
	id: "you-rocked-my-world-you-know-you-did.md";
  slug: "you-rocked-my-world-you-know-you-did";
  body: string;
  collection: "posts";
  data: any
} & { render(): Render[".md"] };
};
"recortes": {
"5-pounds.md": {
	id: "5-pounds.md";
  slug: "5-pounds";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"banana-rum-cake-recipe.md": {
	id: "banana-rum-cake-recipe.md";
  slug: "banana-rum-cake-recipe";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"black-survival-is-black-excellence.md": {
	id: "black-survival-is-black-excellence.md";
  slug: "black-survival-is-black-excellence";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"cherish.md": {
	id: "cherish.md";
  slug: "cherish";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"chocolate-fudge-cake-recipe.md": {
	id: "chocolate-fudge-cake-recipe.md";
  slug: "chocolate-fudge-cake-recipe";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"earworm-lyrics.md": {
	id: "earworm-lyrics.md";
  slug: "earworm-lyrics";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"happy-accident-1.md": {
	id: "happy-accident-1.md";
  slug: "happy-accident-1";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"hay-fever-haiku.md": {
	id: "hay-fever-haiku.md";
  slug: "hay-fever-haiku";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"if-i-were-a-rich-man-1.md": {
	id: "if-i-were-a-rich-man-1.md";
  slug: "if-i-were-a-rich-man-1";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"my-style-guide.md": {
	id: "my-style-guide.md";
  slug: "my-style-guide";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"not-in-the-constitution.md": {
	id: "not-in-the-constitution.md";
  slug: "not-in-the-constitution";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"personal-lexicon.md": {
	id: "personal-lexicon.md";
  slug: "personal-lexicon";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"saddam-hussein-bacon-number-3.md": {
	id: "saddam-hussein-bacon-number-3.md";
  slug: "saddam-hussein-bacon-number-3";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"saver-store.md": {
	id: "saver-store.md";
  slug: "saver-store";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"so-cansado.md": {
	id: "so-cansado.md";
  slug: "so-cansado";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"sound-familiar.md": {
	id: "sound-familiar.md";
  slug: "sound-familiar";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"vgc-notes.md": {
	id: "vgc-notes.md";
  slug: "vgc-notes";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"visionary.md": {
	id: "visionary.md";
  slug: "visionary";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"wander-in-porto.md": {
	id: "wander-in-porto.md";
  slug: "wander-in-porto";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"web-copy-style.md": {
	id: "web-copy-style.md";
  slug: "web-copy-style";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
"where-theres-gold.md": {
	id: "where-theres-gold.md";
  slug: "where-theres-gold";
  body: string;
  collection: "recortes";
  data: any
} & { render(): Render[".md"] };
};
"release-notes": {
"release-notes-1.md": {
	id: "release-notes-1.md";
  slug: "release-notes-1";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-10.md": {
	id: "release-notes-10.md";
  slug: "release-notes-10";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-11.md": {
	id: "release-notes-11.md";
  slug: "release-notes-11";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-12.md": {
	id: "release-notes-12.md";
  slug: "release-notes-12";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-13.md": {
	id: "release-notes-13.md";
  slug: "release-notes-13";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-14.md": {
	id: "release-notes-14.md";
  slug: "release-notes-14";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-15.md": {
	id: "release-notes-15.md";
  slug: "release-notes-15";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-16.md": {
	id: "release-notes-16.md";
  slug: "release-notes-16";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-17.md": {
	id: "release-notes-17.md";
  slug: "release-notes-17";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-18.md": {
	id: "release-notes-18.md";
  slug: "release-notes-18";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-2.md": {
	id: "release-notes-2.md";
  slug: "release-notes-2";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-3.md": {
	id: "release-notes-3.md";
  slug: "release-notes-3";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-4.md": {
	id: "release-notes-4.md";
  slug: "release-notes-4";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-5.md": {
	id: "release-notes-5.md";
  slug: "release-notes-5";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-6.md": {
	id: "release-notes-6.md";
  slug: "release-notes-6";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-7.md": {
	id: "release-notes-7.md";
  slug: "release-notes-7";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-8.md": {
	id: "release-notes-8.md";
  slug: "release-notes-8";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
"release-notes-9.md": {
	id: "release-notes-9.md";
  slug: "release-notes-9";
  body: string;
  collection: "release-notes";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
