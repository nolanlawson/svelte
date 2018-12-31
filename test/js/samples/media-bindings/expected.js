/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addListener, add_render_callback, createElement, detachNode, flush, init, insert, run, run_all, safe_not_equal, timeRangesToArray } from "svelte/internal";

function create_fragment(component, ctx) {
	var audio, audio_updating = false, audio_animationframe, audio_is_paused = true, current, dispose;

	function audio_timeupdate_handler() {
		cancelAnimationFrame(audio_animationframe);
		if (!audio.paused) audio_animationframe = requestAnimationFrame(audio_timeupdate_handler);
		audio_updating = true;
		ctx.audio_timeupdate_handler.call(audio);
	}

	return {
		c() {
			audio = createElement("audio");
			if (ctx.played === void 0 || ctx.currentTime === void 0) add_render_callback(audio_timeupdate_handler);
			if (ctx.duration === void 0) add_render_callback(() => ctx.audio_durationchange_handler.call(audio));
			if (ctx.buffered === void 0) add_render_callback(() => ctx.audio_progress_handler.call(audio));
			if (ctx.buffered === void 0 || ctx.seekable === void 0) add_render_callback(() => ctx.audio_loadedmetadata_handler.call(audio));

			dispose = [
				addListener(audio, "timeupdate", audio_timeupdate_handler),
				addListener(audio, "durationchange", ctx.audio_durationchange_handler),
				addListener(audio, "play", ctx.audio_play_pause_handler),
				addListener(audio, "pause", ctx.audio_play_pause_handler),
				addListener(audio, "progress", ctx.audio_progress_handler),
				addListener(audio, "loadedmetadata", ctx.audio_loadedmetadata_handler),
				addListener(audio, "volumechange", ctx.audio_volumechange_handler)
			];
		},

		m(target, anchor) {
			insert(target, audio, anchor);

			audio.volume = ctx.volume;

			current = true;
		},

		p(changed, ctx) {
			if (!audio_updating && changed.currentTime && !isNaN(ctx.currentTime)) audio.currentTime = ctx.currentTime;
			if (changed.paused && audio_is_paused !== (audio_is_paused = ctx.paused)) audio[audio_is_paused ? "pause" : "play"]();
			if (changed.volume && !isNaN(ctx.volume)) audio.volume = ctx.volume;
			audio_updating = false;
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (detach) {
				detachNode(audio);
			}

			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { buffered, seekable, played, currentTime, duration, paused, volume } = $$props;

	function audio_timeupdate_handler() {
		played = timeRangesToArray(this.played);
		currentTime = this.currentTime;
		$$invalidate('played', played);
		$$invalidate('currentTime', currentTime);
	}

	function audio_durationchange_handler() {
		duration = this.duration;
		$$invalidate('duration', duration);
	}

	function audio_play_pause_handler() {
		paused = this.paused;
		$$invalidate('paused', paused);
	}

	function audio_progress_handler() {
		buffered = timeRangesToArray(this.buffered);
		$$invalidate('buffered', buffered);
	}

	function audio_loadedmetadata_handler() {
		buffered = timeRangesToArray(this.buffered);
		seekable = timeRangesToArray(this.seekable);
		$$invalidate('buffered', buffered);
		$$invalidate('seekable', seekable);
	}

	function audio_volumechange_handler() {
		volume = this.volume;
		$$invalidate('volume', volume);
	}

	$$self.$set = $$props => {
		if ('buffered' in $$props) $$invalidate('buffered', buffered = $$props.buffered);
		if ('seekable' in $$props) $$invalidate('seekable', seekable = $$props.seekable);
		if ('played' in $$props) $$invalidate('played', played = $$props.played);
		if ('currentTime' in $$props) $$invalidate('currentTime', currentTime = $$props.currentTime);
		if ('duration' in $$props) $$invalidate('duration', duration = $$props.duration);
		if ('paused' in $$props) $$invalidate('paused', paused = $$props.paused);
		if ('volume' in $$props) $$invalidate('volume', volume = $$props.volume);
	};

	return {
		buffered,
		seekable,
		played,
		currentTime,
		duration,
		paused,
		volume,
		audio_timeupdate_handler,
		audio_durationchange_handler,
		audio_play_pause_handler,
		audio_progress_handler,
		audio_loadedmetadata_handler,
		audio_volumechange_handler
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get buffered() {
		return this.$$.ctx.buffered;
	}

	set buffered(buffered) {
		this.$set({ buffered });
		flush();
	}

	get seekable() {
		return this.$$.ctx.seekable;
	}

	set seekable(seekable) {
		this.$set({ seekable });
		flush();
	}

	get played() {
		return this.$$.ctx.played;
	}

	set played(played) {
		this.$set({ played });
		flush();
	}

	get currentTime() {
		return this.$$.ctx.currentTime;
	}

	set currentTime(currentTime) {
		this.$set({ currentTime });
		flush();
	}

	get duration() {
		return this.$$.ctx.duration;
	}

	set duration(duration) {
		this.$set({ duration });
		flush();
	}

	get paused() {
		return this.$$.ctx.paused;
	}

	set paused(paused) {
		this.$set({ paused });
		flush();
	}

	get volume() {
		return this.$$.ctx.volume;
	}

	set volume(volume) {
		this.$set({ volume });
		flush();
	}
}

export default SvelteComponent;