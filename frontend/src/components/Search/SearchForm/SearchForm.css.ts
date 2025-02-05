import { typographyStyles } from '@highlight-run/ui/components'
import { sprinkles } from '@highlight-run/ui/sprinkles'
import { themeVars } from '@highlight-run/ui/theme'
import { vars } from '@highlight-run/ui/vars'
import { globalStyle, style } from '@vanilla-extract/css'

import { styledVerticalScrollbar } from '@/style/common.css'

export const searchIcon = style({
	position: 'absolute',
	top: 13,
	left: 14,
	color: vars.theme.interactive.fill.secondary.content.text,
})

const WORD_SPACING = 4

export const combobox = style([
	sprinkles({
		p: '6',
	}),
	typographyStyles.family.body,
	typographyStyles.size.small,
	{
		background: 'transparent',
		border: 0,
		caretColor: vars.theme.static.content.default,
		display: 'flex',
		fontFeatureSettings: '"tnum" off', // disable tabular numbers
		fontWeight: '500 !important',
		pointerEvents: 'auto',
		width: '100%',
		wordSpacing: WORD_SPACING,
		selectors: {
			'&:focus': {
				outline: 0,
			},
			'&::placeholder': {
				color: vars.theme.interactive.fill.secondary.content.onDisabled,
			},
			'&::selection': {
				backgroundColor: vars.theme.interactive.fill.secondary.pressed,
			},
		},
	},
])

export const comboboxNotEmpty = style({
	WebkitTextFillColor: 'transparent',
})

export const comboboxTagsContainer = style([
	typographyStyles.family.body,
	typographyStyles.size.small,
	{
		alignItems: 'center',
		display: 'flex',
		flexWrap: 'nowrap',
		fontWeight: '500 !important',
		maxWidth: 'calc(100% - 26px)',
		overflow: 'hidden',
		paddingRight: 8,
		pointerEvents: 'none',
		position: 'absolute',
		whiteSpace: 'pre',
	},
])

export const comboboxTag = style({
	display: 'inline-flex',
	fontFeatureSettings: '"tnum" off', // disable tabular numbers
	position: 'relative',
	textOverflow: 'ellipsis',
	whiteSpace: 'pre',
	wordSpacing: WORD_SPACING,
})

export const token = style({
	// Ensures that the token fits inside the container and doesn't render on top
	// of the border when there is an error.
	height: 18,
	marginTop: 1,
})

export const whitspaceToken = style({
	letterSpacing: WORD_SPACING,
	wordSpacing: 0,
})

export const errorToken = style({
	backgroundColor: 'rgba(255, 9, 87, 0.1)',
})

export const comboboxTagBackground = style({
	border: vars.border.secondary,
	borderRadius: vars.borderRadius[4],
	height: 20,
	letterSpacing: 'normal',
	position: 'absolute',
	top: 7,
	left: -2,
	bottom: 0,
	right: -2,
	width: 'calc(100% + 4px)',
})

export const comboboxTagActive = style({})
export const comboboxTagError = style({})

export const comboboxTagClose = style({
	backgroundColor: vars.color.white,
	borderRadius: vars.borderRadius.round,
	color: themeVars.static.content.default,
	cursor: 'pointer',
	position: 'absolute',
	pointerEvents: 'auto',
	opacity: 0,
	right: -8,
	top: 1,
	zIndex: 1,
})

export const comboboxTagErrorIndicator = style({
	backgroundColor: vars.color.white,
	borderRadius: vars.borderRadius.round,
	color: themeVars.static.content.sentiment.bad,
	fontWeight: 'bold',
	opacity: 1,
	position: 'absolute',
	pointerEvents: 'auto',
	right: -8,
	top: 1,
	zIndex: 1,
})

globalStyle(
	`${comboboxTagActive} ${comboboxTagBackground}, ${comboboxTag}:hover ${comboboxTagBackground}`,
	{
		backgroundColor: `color-mix(in srgb, ${vars.theme.static.surface.elevated} 50%, transparent)`,
	},
)

globalStyle(`${comboboxTagError} ${comboboxTagBackground}`, {
	border: `1px solid ${vars.theme.static.content.sentiment.bad}`,
})

globalStyle(`${comboboxTag}:hover ${comboboxTagClose}`, {
	opacity: 1,
})

globalStyle(`${comboboxTag}:hover ${comboboxTagErrorIndicator}`, {
	display: 'none',
})

export const comboboxPopover = style({
	background: vars.theme.static.surface.default,
	border: vars.border.dividerWeak,
	borderRadius: vars.borderRadius[8],
	boxShadow: vars.shadows.small,
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	maxWidth: 600,
	maxHeight: 'min(var(--popover-available-height,300px),300px)',
	paddingBottom: 33,
	zIndex: 10,
})

export const comboboxResults = style([
	styledVerticalScrollbar,
	{
		overflowY: 'scroll',
	},
])

export const comboboxItem = style({
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	flexDirection: 'row',
	padding: '0 10px',
	minHeight: 30,
	selectors: {
		'&:hover': {
			backgroundColor: vars.theme.interactive.fill.secondary.hover,
		},
		'&[data-active-item]': {
			backgroundColor: vars.theme.interactive.fill.secondary.pressed,
		},
	},
})

export const comboboxGroup = style([
	sprinkles({
		py: '4',
	}),
	{
		selectors: {
			'& + &': {
				borderTop: vars.border.secondary,
			},
		},
	},
])
