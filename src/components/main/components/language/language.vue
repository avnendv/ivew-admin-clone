<template>
	<div>
		<Dropdown trigger="click" @on-click="selectLang">
			<a href="javascript:void(0)">
				{{ title }}
				<Icon :size="18" type="md-arrow-dropdown" />
			</a>
			<DropdownMenu slot="list">
				<DropdownItem
					v-for="(value, key) in localList"
					:name="key"
					:key="`lang-${key}`"
					>{{ value }}</DropdownItem
				>
			</DropdownMenu>
		</Dropdown>
	</div>
</template>

<script>
export default {
	name: 'Language',
	props: {
		lang: String,
	},
	data() {
		return {
			langList: {
				'vi-VN': 'Ngôn ngữ',
				'en-US': 'Lang',
				'zh-CN': '语言',
				'zh-TW': '語言',
			},
			localList: {
				'vi-VN': 'Việt Nam',
				'en-US': 'English',
				'zh-CN': '中文简体',
				'zh-TW': '中文繁体',
			},
		};
	},
	watch: {
		lang(lang) {
			this.$i18n.locale = lang;
		},
	},
	computed: {
		title() {
			return this.langList[this.lang];
		},
	},
	methods: {
		selectLang(name) {
			this.$emit('on-lang-change', name);
		},
	},
};
</script>
