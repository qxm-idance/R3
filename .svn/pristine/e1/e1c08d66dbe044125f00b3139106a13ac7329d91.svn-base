
<template>
	<div class="form-select {{sizeClass}} {{errClass}} {{disabledClass}}" >
		<select id="select" v-model="selected" :disabled="disabled" v-on:change="onChange">
			<template v-for="item in options">
				<optgroup v-if="_isGroup(item.value)" label="{{item.label}}" :disabled="item.disabled">
					<option v-for="opt in item.value" :value="opt" :disabled="opt.disabled">{{opt.label}}</option>
				</optgroup>

				<option v-else :value="item" :disabled="item.disabled">{{item.label}}</option>
			</template>
		</select>
		<div class="form-select__field">{{selectedText}}</div>
	</div>
</template>

<script>

const SIZE_SMALL = 'small';
const CSS_SMALL = 'form-select--small';
const CSS_DISABLED = 'form-select--disabled';
const CSS_ERR = 'form-select--error';

export default {
	props: {
		options: Array,
		defaultVal: [String, Number],
		size: String,
		disabled: Boolean
	},
	data: function () {
		return {
			initVal: null,
			selected: null,
			isErr: false,
		};
	},
	methods: {
		selectFirst: function () {
			var options = this.options;
			if(options && options.length > 0) {
				if(this._isGroup(options[0].value)) {
					var opts = options[0].value;
					if(opts && opts.length > 0) {
						this.selected = opts[0];
					}
				}else {
					this.selected = options[0];
				}
			}
		},
		disable: function () {
			this.disabled = true;
		},
		enable: function () {
			this.disabled = false;
		},
		resetSelect: function () {
			this.selected = this.initVal;
		},
		saveCurrentValue: function() {
			this.initVal = this.selected;
		},
		getValue: function() {
			if(this.selected) {
				return this.selected.value;
			}
		},
		getText: function() {
			if(this.selected) {
				return this.selected.label;
			}
		},
		getSelected: function() {
			return this.selected;
		},
		onChange: function () {
			this.$dispatch('on-change', this.selected);
		},
		_isGroup: function (val) {
			return Object.prototype.toString.call(val) === '[object Array]';
		},
	},
	computed: {
		sizeClass: function() {
			if(this.size === SIZE_SMALL) {
				return CSS_SMALL;
			}

			return '';
		},
		disabledClass: function() {
			if(this.disabled) {
				return CSS_DISABLED;
			}

			return '';
		},
		errClass: function() {
			if(!!this.isErr) {
				return CSS_ERR;
			}

			return '';
		},
		selectedText: function () {
			if(this.selected) {
				return this.selected.label || '';
			}
			return '--';
		}
	}
}

</script>
