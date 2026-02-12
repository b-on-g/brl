namespace $.$$ {
	const colors = {
		bgPrimary: '#fafaf8',
		bgSecondary: '#f1f0ec',
		bgCard: '#ffffff',
		bgDark: '#1a1d23',
		bgDarkLighter: '#252830',
		textPrimary: '#1a1d23',
		textSecondary: '#5a5d66',
		textMuted: '#8e919a',
		textOnDark: '#f1f0ec',
		accent: '#2d6b4a',
		accentHover: '#225839',
		accentLight: '#e6f2eb',
		accentWarm: '#c4953a',
		accentWarmLight: '#fdf6e3',
		border: '#e4e3df',
		borderLight: '#edece8',
	} as const

	const radius = {
		sm: '8px',
		md: '12px',
		lg: '16px',
		xl: '24px',
	} as const

	const shadow = {
		sm: '0 1px 3px rgba(26, 29, 35, 0.04)',
		md: '0 4px 16px rgba(26, 29, 35, 0.06), 0 2px 6px rgba(26, 29, 35, 0.04)',
		hover: '0 8px 30px rgba(26, 29, 35, 0.1)',
	}

	const fonts = {
		display: 'Outfit, sans-serif',
		body: 'Onest, sans-serif',
	}

	const transition = '0.25s cubic-bezier(0.4, 0, 0.2, 1)'

	$mol_style_attach(
		'bog_brl_global',
		`
			*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
			html { font-size: 16px; scroll-behavior: smooth; }
			body {
				margin: 0;
				font-family: ${fonts.body};
				background: ${colors.bgPrimary};
				color: ${colors.textPrimary};
				line-height: 1.6;
				-webkit-font-smoothing: antialiased;
				overflow-x: hidden;
			}
			a { text-decoration: none; color: inherit; }
			button { font-family: inherit; border: none; background: none; }
			img { max-width: 100%; display: block; }
			input, select { font-family: inherit; }
		`,
	)

	$mol_style_attach(
		'bog_brl_keyframes',
		`
			@keyframes bog_brl_pulse {
				0%, 100% { opacity: 1; }
				50% { opacity: 0.4; }
			}
		`,
	)

	$mol_style_define($bog_brl, {
		minHeight: '100vh',
		background: { color: colors.bgPrimary },
		color: colors.textPrimary,
		fontFamily: fonts.body,
		lineHeight: '1.6',
		flexDirection: 'column',
	})

	$mol_style_define($bog_brl_container, {
		maxWidth: '1200px',
		margin: { left: 'auto', right: 'auto' },
		padding: {
			left: $mol_style_func.clamp('16px', '3vw', '24px'),
			right: $mol_style_func.clamp('16px', '3vw', '24px'),
		},
		width: '100%',
		flexDirection: 'column',
	})

	$mol_style_define($bog_brl_header, {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		zIndex: 1000,
		background: { color: $mol_style_func.rgba(250, 250, 248, 0.88) },
		backdropFilter: [[new $mol_style_func('blur', '20px')]],
		borderBottom: `1px solid ${colors.borderLight}`,

		Header_inner: {
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'space-between' },
			gap: '12px',
			minHeight: '72px',
			flexWrap: 'wrap',
		},

		Logo: {
			display: 'flex',
			align: { items: 'center' },
			gap: '10px',
			fontFamily: fonts.display,
			font: { weight: 800, size: '1.45rem' },
			cursor: 'pointer',
		},

		Logo_mark: {
			width: '36px',
			height: '36px',
			background: { color: colors.accent },
			border: { radius: radius.sm },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			color: 'white',
			font: { size: '0.85rem', weight: 800 },
		},

		Nav: {
			display: 'flex',
			align: { items: 'center' },
			gap: '6px',
			flexWrap: 'wrap',
			margin: { left: 'auto' },
		},

		Burger: {
			display: 'none',
			margin: { left: 0 },
		},

		'@media': {
			'screen and (max-width: 768px)': {
				Nav: {
					display: 'none',
				},
				Burger: {
					display: 'flex',
				},
			},
		},
	})

	$mol_style_define($bog_brl_nav_link, {
		padding: { top: '8px', right: '16px', bottom: '8px', left: '16px' },
		border: { radius: radius.sm },
		font: { size: '0.9rem', weight: 500 },
		color: colors.textSecondary,
		transition,
		textDecoration: 'none',
		cursor: 'pointer',
		':hover': {
			color: colors.textPrimary,
			background: { color: colors.bgSecondary },
		},
		'@': {
			mol_link_current: {
				true: {
					color: colors.textPrimary,
					background: { color: colors.bgSecondary },
				},
			},
		},
	})

	$mol_style_define($bog_brl_nav_cta, {
		display: 'inline-flex',
		align: { items: 'center' },
		gap: '7px',
		padding: { top: '9px', right: '20px', bottom: '9px', left: '20px' },
		border: { radius: radius.sm },
		background: { color: '#2aabee' },
		color: 'white',
		font: { size: '0.88rem', weight: 600 },
		transition,
		':hover': {
			background: { color: '#229ed9' },
			transform: 'translateY(-1px)',
		},

		Nav_cta_icon: {
			font: { size: '0.9rem' },
		},
	})

	$mol_style_define($bog_brl_burger, {
		display: 'none',
		flexDirection: 'column',
		gap: '5px',
		padding: '8px',
		cursor: 'pointer',

		Burger_line_1: {
			width: '22px',
			height: '2px',
			background: { color: colors.textPrimary },
			border: { radius: '2px' },
		},
		Burger_line_2: {
			width: '22px',
			height: '2px',
			background: { color: colors.textPrimary },
			border: { radius: '2px' },
		},
		Burger_line_3: {
			width: '22px',
			height: '2px',
			background: { color: colors.textPrimary },
			border: { radius: '2px' },
		},

		'@media': {
			'screen and (max-width: 768px)': {
				display: 'flex',
			},
		},
	})

	$mol_style_define($bog_brl_mobile_nav, {
		display: 'none',
		position: 'fixed',
		top: '72px',
		left: 0,
		right: 0,
		bottom: 0,
		background: { color: colors.bgPrimary },
		padding: '24px',
		zIndex: 999,
		flexDirection: 'column',
		gap: '8px',
		overflowY: 'auto',
		'@': {
			bog_brl_mobile_nav_open: {
				true: {
					display: 'flex',
				},
			},
		},
	})

	$mol_style_define($bog_brl_mobile_link, {
		padding: { top: '14px', right: '16px', bottom: '14px', left: '16px' },
		border: { radius: radius.sm },
		font: { size: '1.05rem', weight: 500 },
		color: colors.textSecondary,
		textAlign: 'left',
		transition,
		':hover': {
			color: colors.textPrimary,
			background: { color: colors.bgSecondary },
		},
	})

	$mol_style_define($bog_brl_btn_primary, {
		display: 'inline-flex',
		align: { items: 'center' },
		gap: '8px',
		padding: { top: '14px', right: '32px', bottom: '14px', left: '32px' },
		background: { color: colors.accent },
		color: 'white',
		border: { radius: radius.sm },
		font: { size: '1rem', weight: 600 },
		transition,
		':hover': {
			background: { color: colors.accentHover },
			transform: 'translateY(-2px)',
			boxShadow: shadow.md,
		},
	})

	$mol_style_define($bog_brl_btn_telegram, {
		display: 'inline-flex',
		align: { items: 'center' },
		gap: '8px',
		padding: { top: '14px', right: '28px', bottom: '14px', left: '28px' },
		background: { color: '#2aabee' },
		color: 'white',
		border: { radius: radius.sm },
		font: { size: '1rem', weight: 600 },
		transition,
		':hover': {
			background: { color: '#229ed9' },
			transform: 'translateY(-2px)',
			boxShadow: shadow.md,
		},
	})

	$mol_style_define($bog_brl_btn_phone, {
		display: 'inline-flex',
		align: { items: 'center' },
		gap: '8px',
		padding: { top: '14px', right: '28px', bottom: '14px', left: '28px' },
		background: { color: colors.bgCard },
		color: colors.textPrimary,
		border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
		font: { size: '1rem', weight: 500 },
		transition,
		':hover': {
			borderColor: colors.accent,
			color: colors.accent,
			transform: 'translateY(-1px)',
		},
	})

	$mol_style_define($bog_brl_home, {
		flexDirection: 'column',
		Hero: {
			padding: {
				top: $mol_style_func.clamp('120px', '15vw', '140px'),
				right: 0,
				bottom: $mol_style_func.clamp('56px', '8vw', '80px'),
				left: 0,
			},
			background: {
				image: [
					[
						$mol_style_func.linear_gradient([
							'165deg',
							`${colors.bgPrimary} 0%`,
							`${colors.bgSecondary} 50%`,
							`${colors.accentLight} 100%`,
						]),
					],
				],
			},
			position: 'relative',
			overflow: 'hidden',
			'::before': {
				content: "''",
				position: 'absolute',
				top: '-120px',
				right: '-80px',
				width: '500px',
				height: '500px',
				background: {
					image: [[$mol_style_func.radial_gradient('circle, rgba(45, 107, 74, 0.06) 0%, transparent 70%')]],
				},
				border: { radius: '50%' },
			},
		},

		Hero_content: {
			position: 'relative',
			zIndex: 1,
			maxWidth: '720px',
			flexDirection: 'column',
		},

		Hero_badge: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '6px', right: '16px', bottom: '6px', left: '8px' },
			background: { color: colors.accentLight },
			border: {
				radius: '100px',
				style: 'solid',
				width: '1px',
				color: $mol_style_func.rgba(45, 107, 74, 0.15),
			},
			font: { size: '0.82rem', weight: 600 },
			color: colors.accent,
			margin: { bottom: '28px' },
			alignSelf: 'flex-start',
		},

		Hero_badge_dot: {
			width: '8px',
			height: '8px',
			background: { color: colors.accent },
			border: { radius: '50%' },
			animationName: 'bog_brl_pulse',
			animationDuration: '2s',
			animationIterationCount: 'infinite',
		},

		Hero_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('2.2rem', '5vw', '3.4rem'), weight: 800 },
			lineHeight: '1.12',
			letterSpacing: '-0.03em',
			margin: { bottom: '20px' },
			display: 'flex',
			flexWrap: 'wrap',
			gap: '0.35rem',
		},

		Hero_title_em: {
			fontStyle: 'normal',
			background: {
				image: [[$mol_style_func.linear_gradient(['135deg', colors.accent, '#3da066'])]],
			},
			backgroundClip: 'text',
			color: 'transparent',
		},

		Hero_sub: {
			font: { size: '1.12rem' },
			color: colors.textSecondary,
			lineHeight: '1.7',
			margin: { bottom: '12px' },
			maxWidth: '560px',
		},

		Hero_commission: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '10px', right: '20px', bottom: '10px', left: '20px' },
			background: { color: colors.accentWarmLight },
			border: {
				radius: radius.sm,
				style: 'solid',
				width: '1px',
				color: $mol_style_func.rgba(196, 149, 58, 0.2),
			},
			font: { size: '0.95rem', weight: 600 },
			color: '#8b6914',
			margin: { bottom: '32px' },
			alignSelf: 'flex-start',
		},

		Hero_commission_text: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '4px',
			flexWrap: 'wrap',
		},

		Hero_commission_value: {
			font: { weight: 700 },
			margin: { left: '4px' },
		},

		Hero_actions: {
			display: 'flex',
			gap: '14px',
			flexWrap: 'wrap',
		},

		Stats: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
			gap: '2px',
			background: { color: colors.borderLight },
			border: { radius: radius.lg },
			overflow: 'hidden',
			margin: { top: '56px' },
			position: 'relative',
			zIndex: 1,
		},

		How: {
			background: { color: colors.bgPrimary },
			padding: {
				top: $mol_style_func.clamp('60px', '8vw', '80px'),
				right: 0,
				bottom: $mol_style_func.clamp('60px', '8vw', '80px'),
				left: 0,
			},
		},

		Advantages: {
			background: { color: colors.bgSecondary },
			padding: {
				top: $mol_style_func.clamp('60px', '8vw', '80px'),
				right: 0,
				bottom: $mol_style_func.clamp('60px', '8vw', '80px'),
				left: 0,
			},
		},

		How_header: {
			margin: { bottom: '48px' },
			textAlign: 'center',
			flexDirection: 'column',
		},

		Advantages_header: {
			margin: { bottom: '48px' },
			textAlign: 'center',
			flexDirection: 'column',
		},

		How_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
			letterSpacing: '-0.02em',
			margin: { bottom: '12px' },
		},

		Advantages_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
			letterSpacing: '-0.02em',
			margin: { bottom: '12px' },
		},

		How_text: {
			color: colors.textSecondary,
			font: { size: '1.02rem' },
			maxWidth: '560px',
			margin: { left: 'auto', right: 'auto' },
		},

		Advantages_text: {
			color: colors.textSecondary,
			font: { size: '1.02rem' },
			maxWidth: '560px',
			margin: { left: 'auto', right: 'auto' },
		},

		Steps: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
			gap: '16px',
		},

		Advantages_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
			gap: '20px',
		},

		'@media': {
			'screen and (max-width: 1024px)': {
				Steps: {
					gridTemplateColumns: 'repeat(3, 1fr)',
				},
			},
			'screen and (max-width: 768px)': {
				Hero: {
					padding: { top: '120px', right: 0, bottom: '56px', left: 0 },
				},
				Stats: {
					gridTemplateColumns: 'repeat(2, 1fr)',
				},
				Advantages_grid: {
					gridTemplateColumns: '1fr',
				},
				Steps: {
					gridTemplateColumns: '1fr',
				},
				Hero_actions: {
					flexDirection: 'column',
				},
				Hero_action_primary: {
					width: '100%',
					justify: { content: 'center' },
					textAlign: 'center',
				},
				Hero_action_telegram: {
					width: '100%',
					justify: { content: 'center' },
					textAlign: 'center',
				},
			},
		},
	})

	$mol_style_define($bog_brl_stat, {
		background: { color: colors.bgCard },
		padding: { top: '28px', right: '24px', bottom: '28px', left: '24px' },
		textAlign: 'center',
		flexDirection: 'column',

		Stat_number: {
			fontFamily: fonts.display,
			font: { size: '1.7rem', weight: 800 },
			color: colors.accent,
			margin: { bottom: '4px' },
		},

		Stat_label: {
			font: { size: '0.8rem', weight: 500 },
			color: colors.textMuted,
		},
	})

	$mol_style_define($bog_brl_step, {
		background: { color: colors.bgCard },
		border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
		padding: { top: '28px', right: '22px', bottom: '28px', left: '22px' },
		textAlign: 'center',
		flexDirection: 'column',
		align: { items: 'center' },
		transition,
		':hover': {
			transform: 'translateY(-3px)',
			boxShadow: shadow.hover,
			borderColor: 'transparent',
		},

		Step_num: {
			fontFamily: fonts.display,
			font: { size: '2rem', weight: 800 },
			color: colors.accentLight,
			margin: { bottom: '12px' },
			lineHeight: '1',
		},

		Step_icon: {
			font: { size: '1.6rem' },
			margin: { bottom: '12px' },
		},

		Step_title: {
			fontFamily: fonts.display,
			font: { size: '0.95rem', weight: 700 },
			margin: { bottom: '6px' },
		},

		Step_text: {
			font: { size: '0.82rem' },
			color: colors.textMuted,
			lineHeight: '1.5',
		},
	})

	$mol_style_define($bog_brl_adv, {
		background: { color: colors.bgCard },
		border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
		padding: { top: '32px', right: '26px', bottom: '32px', left: '26px' },
		flexDirection: 'column',
		transition,
		':hover': {
			transform: 'translateY(-4px)',
			boxShadow: shadow.hover,
			borderColor: 'transparent',
		},

		Adv_icon: {
			width: '48px',
			height: '48px',
			border: { radius: radius.md },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '1.3rem' },
			margin: { bottom: '18px' },
		},

		Adv_title: {
			fontFamily: fonts.display,
			font: { size: '1.1rem', weight: 700 },
			margin: { bottom: '8px' },
		},

		Adv_text: {
			font: { size: '0.9rem' },
			color: colors.textSecondary,
			lineHeight: '1.65',
		},

		'@': {
			bog_brl_adv_theme: {
				green: {
					Adv_icon: {
						background: { color: colors.accentLight },
					},
				},
				warm: {
					Adv_icon: {
						background: { color: colors.accentWarmLight },
					},
				},
				muted: {
					Adv_icon: {
						background: { color: colors.bgSecondary },
					},
				},
			},
		},
	})

	$mol_style_define($bog_brl_catalog, {
		flexDirection: 'column',
		Catalog_section: {
			background: { color: colors.bgSecondary },
			padding: { top: '120px', right: 0, bottom: '80px', left: 0 },
		},

		Section_header: {
			margin: { bottom: '32px' },
			flexDirection: 'column',
		},

		Section_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
			letterSpacing: '-0.02em',
			margin: { bottom: '12px' },
		},

		Section_text: {
			color: colors.textSecondary,
			font: { size: '1.02rem' },
			maxWidth: '560px',
		},

		Filters: {
			display: 'flex',
			gap: '12px',
			flexWrap: 'wrap',
			align: { items: 'flex-end' },
			margin: { bottom: '28px' },
		},

		Filter_type: { display: 'flex', flexDirection: 'column', gap: '6px' },
		Filter_rooms: { display: 'flex', flexDirection: 'column', gap: '6px' },
		Filter_district: { display: 'flex', flexDirection: 'column', gap: '6px' },
		Filter_price_min: { display: 'flex', flexDirection: 'column', gap: '6px' },
		Filter_price_max: { display: 'flex', flexDirection: 'column', gap: '6px' },

		Filter_type_label: {
			font: { size: '0.75rem', weight: 600 },
			color: colors.textMuted,
			textTransform: 'uppercase',
			letterSpacing: '0.06em',
		},
		Filter_rooms_label: {
			font: { size: '0.75rem', weight: 600 },
			color: colors.textMuted,
			textTransform: 'uppercase',
			letterSpacing: '0.06em',
		},
		Filter_district_label: {
			font: { size: '0.75rem', weight: 600 },
			color: colors.textMuted,
			textTransform: 'uppercase',
			letterSpacing: '0.06em',
		},
		Filter_price_min_label: {
			font: { size: '0.75rem', weight: 600 },
			color: colors.textMuted,
			textTransform: 'uppercase',
			letterSpacing: '0.06em',
		},
		Filter_price_max_label: {
			font: { size: '0.75rem', weight: 600 },
			color: colors.textMuted,
			textTransform: 'uppercase',
			letterSpacing: '0.06em',
		},

		Filter_type_select: {
			padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
			border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
			background: { color: colors.bgCard },
			font: { size: '0.9rem' },
			color: colors.textPrimary,
			transition,
			minWidth: '155px',
			':focus': {
				borderColor: colors.accent,
				boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
			},
		},

		Filter_rooms_select: {
			padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
			border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
			background: { color: colors.bgCard },
			font: { size: '0.9rem' },
			color: colors.textPrimary,
			transition,
			minWidth: '155px',
			':focus': {
				borderColor: colors.accent,
				boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
			},
		},

		Filter_district_select: {
			padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
			border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
			background: { color: colors.bgCard },
			font: { size: '0.9rem' },
			color: colors.textPrimary,
			transition,
			minWidth: '155px',
			':focus': {
				borderColor: colors.accent,
				boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
			},
		},

		Filter_price_min_input: {
			padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
			border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
			background: { color: colors.bgCard },
			font: { size: '0.9rem' },
			color: colors.textPrimary,
			transition,
			minWidth: '125px',
			':focus': {
				borderColor: colors.accent,
				boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
			},
		},

		Filter_price_max_input: {
			padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
			border: { radius: radius.sm, style: 'solid', width: '1px', color: colors.border },
			background: { color: colors.bgCard },
			font: { size: '0.9rem' },
			color: colors.textPrimary,
			transition,
			minWidth: '125px',
			':focus': {
				borderColor: colors.accent,
				boxShadow: '0 0 0 3px rgba(45, 107, 74, 0.1)',
			},
		},

		Filter_apply: {
			padding: { top: '10px', right: '24px', bottom: '10px', left: '24px' },
			background: { color: colors.accent },
			color: 'white',
			border: { radius: radius.sm },
			font: { size: '0.9rem', weight: 600 },
			transition,
			':hover': {
				background: { color: colors.accentHover },
			},
		},

		Filter_reset: {
			padding: { top: '10px', right: '16px', bottom: '10px', left: '16px' },
			color: colors.textMuted,
			font: { size: '0.86rem', weight: 500 },
			transition,
			border: { radius: radius.sm },
			':hover': {
				color: colors.textPrimary,
				background: { color: colors.bgCard },
			},
		},

		Results_count: {
			font: { size: '0.88rem' },
			color: colors.textMuted,
			margin: { bottom: '20px' },
			display: 'flex',
			gap: '6px',
			align: { items: 'baseline' },
		},

		Results_value: {
			color: colors.textPrimary,
			font: { weight: 600 },
		},

		Properties_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
			gap: '20px',
		},

		'@media': {
			'screen and (max-width: 1024px)': {
				Properties_grid: {
					gridTemplateColumns: 'repeat(2, 1fr)',
				},
			},
			'screen and (max-width: 768px)': {
				Filters: {
					flexDirection: 'column',
				},
				Filter_type_select: {
					minWidth: '100%',
				},
				Filter_rooms_select: {
					minWidth: '100%',
				},
				Filter_district_select: {
					minWidth: '100%',
				},
				Filter_price_min_input: {
					minWidth: '100%',
				},
				Filter_price_max_input: {
					minWidth: '100%',
				},
				Properties_grid: {
					gridTemplateColumns: '1fr',
				},
			},
		},
	})

	$mol_style_define($bog_brl_property_card, {
		background: { color: colors.bgCard },
		border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
		overflow: 'hidden',
		transition,
		cursor: 'pointer',
		color: colors.textPrimary,
		textDecoration: 'none',
		flexDirection: 'column',
		':hover': {
			transform: 'translateY(-4px)',
			boxShadow: shadow.hover,
			borderColor: 'transparent',
			Card_image_pic: {
				transform: 'scale(1.04)',
			},
		},

		Card_image: {
			height: '210px',
			overflow: 'hidden',
			position: 'relative',
		},

		Card_image_pic: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
			transition: 'transform 0.4s ease',
		},

		Card_badge: {
			position: 'absolute',
			top: '12px',
			left: '12px',
			padding: { top: '4px', right: '12px', bottom: '4px', left: '12px' },
			border: { radius: '100px' },
			font: { size: '0.75rem', weight: 600 },
			background: { color: $mol_style_func.rgba(45, 107, 74, 0.9) },
			color: '#fff',
			backdropFilter: [[new $mol_style_func('blur', '8px')]],
		},

		Card_body: {
			padding: '20px',
			flexDirection: 'column',
		},

		Card_price: {
			fontFamily: fonts.display,
			font: { size: '1.3rem', weight: 700 },
			margin: { bottom: '4px' },
			display: 'flex',
			gap: '6px',
			align: { items: 'baseline' },
		},

		Card_price_unit: {
			font: { size: '0.82rem', weight: 400 },
			color: colors.textMuted,
		},

		Card_address: {
			font: { size: '0.86rem' },
			color: colors.textSecondary,
			margin: { bottom: '14px' },
		},

		Card_meta: {
			display: 'flex',
			gap: '14px',
			padding: { top: '14px' },
			borderTop: `1px solid ${colors.borderLight}`,
			flexWrap: 'wrap',
		},

		Card_meta_rooms: {
			font: { size: '0.8rem' },
			color: colors.textMuted,
			display: 'flex',
			align: { items: 'center' },
			gap: '4px',
		},
		Card_meta_area: {
			font: { size: '0.8rem' },
			color: colors.textMuted,
			display: 'flex',
			align: { items: 'center' },
			gap: '4px',
		},
		Card_meta_floor: {
			font: { size: '0.8rem' },
			color: colors.textMuted,
			display: 'flex',
			align: { items: 'center' },
			gap: '4px',
		},

		'@': {
			bog_brl_property_badge_house: {
				true: {
					Card_badge: {
						background: { color: $mol_style_func.rgba(196, 149, 58, 0.9) },
					},
				},
			},
		},
	})

	$mol_style_define($bog_brl_property, {
		flexDirection: 'column',
		Property_section: {
			padding: { top: '96px', right: 0, bottom: '80px', left: 0 },
		},

		Back_link: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '6px',
			font: { size: '0.9rem' },
			color: colors.textMuted,
			margin: { bottom: '24px' },
			transition,
			':hover': {
				color: colors.textPrimary,
			},
		},

		Property_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
			gap: '32px',
		},

		Property_main: {
			flexDirection: 'column',
		},

		Gallery: {
			border: { radius: radius.lg },
			overflow: 'hidden',
			position: 'relative',
			aspectRatio: '16 / 10',
		},

		Gallery_image: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},

		Gallery_arrows: {
			position: 'absolute',
			top: '50%',
			left: 0,
			right: 0,
			display: 'flex',
			justify: { content: 'space-between' },
			padding: { top: 0, right: '12px', bottom: 0, left: '12px' },
			transform: 'translateY(-50%)',
		},

		Gallery_prev: {
			width: '40px',
			height: '40px',
			border: { radius: '50%' },
			background: { color: $mol_style_func.rgba(255, 255, 255, 0.85) },
			backdropFilter: [[new $mol_style_func('blur', '8px')]],
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '1.1rem' },
			color: colors.textPrimary,
			transition,
			':hover': {
				background: { color: 'white' },
			},
		},

		Gallery_next: {
			width: '40px',
			height: '40px',
			border: { radius: '50%' },
			background: { color: $mol_style_func.rgba(255, 255, 255, 0.85) },
			backdropFilter: [[new $mol_style_func('blur', '8px')]],
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '1.1rem' },
			color: colors.textPrimary,
			transition,
			':hover': {
				background: { color: 'white' },
			},
		},

		Gallery_nav: {
			position: 'absolute',
			bottom: '16px',
			left: '50%',
			transform: 'translateX(-50%)',
			display: 'flex',
			gap: '6px',
		},

		Property_info: {
			margin: { top: '32px' },
			flexDirection: 'column',
		},

		Property_title: {
			fontFamily: fonts.display,
			font: { size: '1.4rem', weight: 700 },
			margin: { bottom: '14px' },
		},

		Property_desc: {
			color: colors.textSecondary,
			lineHeight: '1.75',
			margin: { bottom: '28px' },
		},

		Property_features_title: {
			font: { size: '1.15rem', weight: 700 },
			margin: { bottom: '14px' },
		},

		Property_features: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
			gap: '10px',
		},

		Property_sidebar: {
			background: { color: colors.bgCard },
			border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
			padding: '28px',
			height: 'fit-content',
			position: 'sticky',
			top: '96px',
			flexDirection: 'column',
		},

		Sidebar_price: {
			display: 'flex',
			align: { items: 'baseline' },
			gap: '6px',
			margin: { bottom: '4px' },
		},

		Sidebar_price_value: {
			fontFamily: fonts.display,
			font: { size: '1.9rem', weight: 800 },
		},

		Sidebar_price_unit: {
			font: { size: '0.9rem', weight: 400 },
			color: colors.textMuted,
		},

		Sidebar_type: {
			display: 'inline-block',
			padding: { top: '4px', right: '12px', bottom: '4px', left: '12px' },
			border: { radius: '100px' },
			font: { size: '0.78rem', weight: 600 },
			margin: { bottom: '20px' },
			background: { color: colors.accentLight },
			color: colors.accent,
		},

		Sidebar_specs: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
			gap: '10px',
			margin: { bottom: '20px' },
		},

		Deal_terms: {
			background: { color: colors.accentWarmLight },
			border: {
				radius: radius.md,
				style: 'solid',
				width: '1px',
				color: $mol_style_func.rgba(196, 149, 58, 0.2),
			},
			padding: '16px',
			margin: { bottom: '20px' },
			flexDirection: 'column',
		},

		Deal_title: {
			font: { size: '0.78rem', weight: 600 },
			color: '#8b6914',
			textTransform: 'uppercase',
			letterSpacing: '0.04em',
			margin: { bottom: '8px' },
		},

		Deal_rows: {
			display: 'flex',
			flexDirection: 'column',
			gap: '4px',
		},

		Sidebar_contacts: {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},

		Sidebar_telegram: {
			width: '100%',
			justify: { content: 'center' },
		},
		Sidebar_phone: {
			width: '100%',
			justify: { content: 'center' },
		},

		'@media': {
			'screen and (max-width: 1024px)': {
				Property_grid: {
					gridTemplateColumns: '1fr',
				},
				Property_sidebar: {
					position: 'static',
				},
			},
			'screen and (max-width: 768px)': {
				Property_features: {
					gridTemplateColumns: '1fr',
				},
			},
		},

		'@': {
			bog_brl_sidebar_type_house: {
				true: {
					Sidebar_type: {
						background: { color: colors.accentWarmLight },
						color: '#8b6914',
					},
				},
			},
		},
	})

	$mol_style_define($bog_brl_gallery_dot, {
		width: '8px',
		height: '8px',
		border: { radius: '50%' },
		background: { color: $mol_style_func.rgba(255, 255, 255, 0.5) },
		cursor: 'pointer',
		transition,
		'@': {
			bog_brl_gallery_dot_active: {
				true: {
					width: '24px',
					border: { radius: '4px' },
					background: { color: 'white' },
				},
			},
		},
	})

	$mol_style_define($bog_brl_feature, {
		display: 'flex',
		align: { items: 'center' },
		gap: '10px',
		padding: { top: '10px', right: '14px', bottom: '10px', left: '14px' },
		background: { color: colors.bgSecondary },
		border: { radius: radius.sm },
		font: { size: '0.88rem' },

		Feature_check: {
			color: colors.accent,
			font: { weight: 700 },
		},
	})

	$mol_style_define($bog_brl_spec, {
		background: { color: colors.bgSecondary },
		border: { radius: radius.sm },
		padding: { top: '11px', right: '13px', bottom: '11px', left: '13px' },
		flexDirection: 'column',

		Spec_label: {
			font: { size: '0.73rem' },
			color: colors.textMuted,
			margin: { bottom: '2px' },
		},

		Spec_value: {
			font: { size: '0.92rem', weight: 600 },
		},
	})

	$mol_style_define($bog_brl_deal_row, {
		display: 'flex',
		justify: { content: 'space-between' },
		align: { items: 'center' },
		font: { size: '0.9rem' },
		padding: { top: '4px', right: 0, bottom: '4px', left: 0 },

		Deal_label: {
			color: colors.textSecondary,
		},

		Deal_value: {
			font: { weight: 600 },
		},
	})

	$mol_style_define($bog_brl_landlords, {
		flexDirection: 'column',
		Landlord_hero: {
			padding: { top: $mol_style_func.clamp('120px', '15vw', '140px'), right: 0, bottom: '60px', left: 0 },
			background: {
				image: [[$mol_style_func.linear_gradient(['165deg', colors.bgPrimary, colors.accentWarmLight])]],
			},
		},

		Landlord_hero_container: {
			flexDirection: 'column',
		},

		Landlord_badge: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '8px',
			padding: { top: '6px', right: '16px', bottom: '6px', left: '8px' },
			background: { color: colors.accentLight },
			border: {
				radius: '100px',
				style: 'solid',
				width: '1px',
				color: $mol_style_func.rgba(45, 107, 74, 0.15),
			},
			font: { size: '0.82rem', weight: 600 },
			color: colors.accent,
			margin: { bottom: '20px' },
			alignSelf: 'flex-start',
		},

		Landlord_badge_dot: {
			width: '8px',
			height: '8px',
			background: { color: colors.accent },
			border: { radius: '50%' },
			animationName: 'bog_brl_pulse',
			animationDuration: '2s',
			animationIterationCount: 'infinite',
		},

		Landlord_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('2rem', '4vw', '3rem'), weight: 800 },
			lineHeight: '1.12',
			letterSpacing: '-0.03em',
			margin: { bottom: '16px' },
			maxWidth: '640px',
			display: 'flex',
			flexWrap: 'wrap',
			gap: '0.35rem',
		},

		Landlord_title_em: {
			fontStyle: 'italic',
			color: colors.textPrimary,
		},

		Landlord_sub: {
			font: { size: '1.05rem' },
			color: colors.textSecondary,
			lineHeight: '1.7',
			maxWidth: '640px',
		},

		Landlord_section: {
			padding: {
				top: $mol_style_func.clamp('60px', '8vw', '80px'),
				right: 0,
				bottom: $mol_style_func.clamp('60px', '8vw', '80px'),
				left: 0,
			},
			background: { color: colors.bgPrimary },
		},

		Landlord_section_container: {
			flexDirection: 'column',
		},

		Landlord_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
			gap: '48px',
			align: { items: 'start' },
		},

		Landlord_benefits: {
			display: 'flex',
			flexDirection: 'column',
			gap: '20px',
		},

		Landlord_cta: {
			background: { color: colors.bgDark },
			border: { radius: radius.xl },
			padding: '40px',
			color: 'white',
			position: 'sticky',
			top: '96px',
			flexDirection: 'column',
		},

		Landlord_cta_title: {
			fontFamily: fonts.display,
			font: { size: '1.5rem', weight: 700 },
			margin: { bottom: '12px' },
		},

		Landlord_cta_text: {
			color: $mol_style_func.rgba(255, 255, 255, 0.65),
			font: { size: '0.95rem' },
			lineHeight: '1.7',
			margin: { bottom: '28px' },
		},

		Landlord_cta_contacts: {
			display: 'flex',
			flexDirection: 'column',
			gap: '12px',
		},

		Landlord_cta_telegram: {
			width: '100%',
			justify: { content: 'center' },
		},

		Landlord_cta_phone: {
			width: '100%',
			justify: { content: 'center' },
			borderColor: 'rgba(255, 255, 255, 0.2)',
			color: 'white',
			':hover': {
				borderColor: 'rgba(255, 255, 255, 0.5)',
				color: 'white',
			},
		},

		Commission_explainer: {
			background: { color: colors.accentWarmLight },
			border: {
				radius: radius.lg,
				style: 'solid',
				width: '1px',
				color: $mol_style_func.rgba(196, 149, 58, 0.2),
			},
			padding: '32px',
			margin: { top: '48px' },
			flexDirection: 'column',
		},

		Commission_title: {
			fontFamily: fonts.display,
			font: { size: '1.2rem', weight: 700 },
			margin: { bottom: '16px' },
			color: '#7a5c10',
		},

		Commission_list: {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},

		'@media': {
			'screen and (max-width: 1024px)': {
				Landlord_grid: {
					gridTemplateColumns: '1fr',
				},
				Landlord_cta: {
					position: 'static',
				},
			},
			'screen and (max-width: 768px)': {
				Landlord_hero: {
					padding: { top: '120px', right: 0, bottom: '56px', left: 0 },
				},
			},
		},
	})

	$mol_style_define($bog_brl_landlord_benefit, {
		display: 'flex',
		gap: '16px',
		align: { items: 'flex-start' },
		background: { color: colors.bgCard },
		border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
		padding: '24px',
		transition,
		':hover': {
			boxShadow: shadow.md,
			transform: 'translateY(-2px)',
		},

		Benefit_icon: {
			width: '44px',
			height: '44px',
			minWidth: '44px',
			border: { radius: radius.sm },
			background: { color: colors.accentLight },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '1.2rem' },
		},

		Benefit_title: {
			font: { size: '0.98rem', weight: 600 },
			margin: { bottom: '4px' },
		},

		Benefit_text: {
			font: { size: '0.86rem' },
			color: colors.textMuted,
			lineHeight: '1.55',
		},

		Benefit_body: {
			flexDirection: 'column',
		},
	})

	$mol_style_define($bog_brl_commission_item, {
		display: 'flex',
		gap: '12px',
		align: { items: 'flex-start' },
		font: { size: '0.9rem' },
		color: colors.textSecondary,

		Commission_check: {
			width: '22px',
			height: '22px',
			minWidth: '22px',
			background: { color: $mol_style_func.rgba(45, 107, 74, 0.12) },
			border: { radius: '50%' },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '0.7rem', weight: 700 },
			color: colors.accent,
		},
	})

	$mol_style_define($bog_brl_about, {
		flexDirection: 'column',
		About_section: {
			padding: { top: '120px', right: 0, bottom: '80px', left: 0 },
			background: { color: colors.bgPrimary },
		},

		About_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
			gap: '56px',
			align: { items: 'center' },
		},

		About_visual: {
			background: { color: colors.bgDark },
			border: { radius: radius.xl },
			padding: '48px',
			minHeight: '380px',
			display: 'flex',
			flexDirection: 'column',
			justify: { content: 'flex-end' },
			position: 'relative',
			overflow: 'hidden',
			'::before': {
				content: "''",
				position: 'absolute',
				inset: '0',
				background: {
					image: [
						[
							$mol_style_func.linear_gradient([
								'135deg',
								$mol_style_func.rgba(45, 107, 74, 0.15),
								$mol_style_func.rgba(196, 149, 58, 0.1),
							]),
						],
					],
				},
			},
		},

		About_visual_title: {
			position: 'relative',
			zIndex: 1,
			fontFamily: fonts.display,
			font: { size: '2rem', weight: 800 },
			color: 'white',
			lineHeight: '1.2',
			margin: { bottom: '14px' },
		},

		About_visual_text: {
			position: 'relative',
			zIndex: 1,
			color: $mol_style_func.rgba(255, 255, 255, 0.65),
			font: { size: '0.95rem' },
			lineHeight: '1.7',
		},

		About_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
			letterSpacing: '-0.02em',
			margin: { bottom: '18px' },
		},

		About_text: {
			flexDirection: 'column',
		},

		About_paragraph_1: {
			color: colors.textSecondary,
			font: { size: '0.98rem' },
			lineHeight: '1.75',
			margin: { bottom: '14px' },
		},
		About_paragraph_2: {
			color: colors.textSecondary,
			font: { size: '0.98rem' },
			lineHeight: '1.75',
			margin: { bottom: '14px' },
		},
		About_paragraph_3: {
			color: colors.textSecondary,
			font: { size: '0.98rem' },
			lineHeight: '1.75',
			margin: { bottom: '14px' },
		},

		About_values: {
			margin: { top: '28px' },
			display: 'flex',
			flexDirection: 'column',
			gap: '16px',
		},

		'@media': {
			'screen and (max-width: 1024px)': {
				About_grid: {
					gridTemplateColumns: '1fr',
				},
			},
		},
	})

	$mol_style_define($bog_brl_about_value, {
		display: 'flex',
		gap: '14px',
		align: { items: 'flex-start' },

		About_value_icon: {
			width: '38px',
			height: '38px',
			minWidth: '38px',
			background: { color: colors.accentLight },
			border: { radius: radius.sm },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '1rem' },
		},

		About_value_title: {
			font: { size: '0.92rem', weight: 600 },
			margin: { bottom: '2px' },
		},

		About_value_text: {
			font: { size: '0.85rem' },
			color: colors.textMuted,
		},

		About_value_body: {
			flexDirection: 'column',
		},
	})

	$mol_style_define($bog_brl_contacts, {
		flexDirection: 'column',
		Contacts_section: {
			background: { color: colors.bgSecondary },
			padding: { top: '120px', right: 0, bottom: '80px', left: 0 },
		},

		Section_header: {
			margin: { bottom: '32px' },
			flexDirection: 'column',
		},

		Section_title: {
			fontFamily: fonts.display,
			font: { size: $mol_style_func.clamp('1.7rem', '3vw', '2.3rem'), weight: 700 },
			letterSpacing: '-0.02em',
			margin: { bottom: '12px' },
		},

		Section_text: {
			color: colors.textSecondary,
			font: { size: '1.02rem' },
			maxWidth: '560px',
		},

		Contacts_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
			gap: '32px',
		},

		'@media': {
			'screen and (max-width: 1024px)': {
				Contacts_grid: {
					gridTemplateColumns: '1fr',
				},
			},
		},
	})

	$mol_style_define($bog_brl_contact_card, {
		background: { color: colors.bgCard },
		border: { radius: radius.lg, style: 'solid', width: '1px', color: colors.borderLight },
		padding: '32px',
		transition,
		flexDirection: 'column',
		':hover': {
			boxShadow: shadow.md,
		},

		Contact_icon: {
			width: '48px',
			height: '48px',
			border: { radius: radius.sm },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			font: { size: '1.3rem' },
			margin: { bottom: '16px' },
		},

		Contact_title: {
			font: { size: '1rem', weight: 600 },
			margin: { bottom: '6px' },
		},

		Contact_text: {
			font: { size: '0.9rem' },
			color: colors.textSecondary,
			lineHeight: '1.6',
			margin: { bottom: '16px' },
		},

		Contact_link: {
			display: 'inline-flex',
			align: { items: 'center' },
			gap: '6px',
			font: { weight: 600, size: '0.95rem' },
			color: colors.accent,
			transition,
			':hover': {
				color: colors.accentHover,
			},
		},

		Contact_note: {
			font: { size: '0.9rem' },
			color: colors.textMuted,
		},

		'@': {
			bog_brl_contact_card_theme: {
				tg: {
					Contact_icon: {
						background: { color: '#e3f4fc' },
					},
				},
				phone: {
					Contact_icon: {
						background: { color: colors.accentLight },
					},
				},
				addr: {
					Contact_icon: {
						background: { color: colors.accentWarmLight },
					},
				},
			},
		},
	})

	$mol_style_define($bog_brl_footer, {
		background: { color: colors.bgDark },
		color: colors.textOnDark,
		padding: { top: '56px', right: 0, bottom: '32px', left: 0 },
		flexDirection: 'column',

		Footer_grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
			gap: '40px',
			margin: { bottom: '40px' },
		},

		Footer_brand: {
			flexDirection: 'column',
		},

		Footer_nav: {
			flexDirection: 'column',
		},

		Footer_contacts: {
			flexDirection: 'column',
		},

		Footer_info: {
			flexDirection: 'column',
		},

		Footer_logo: {
			display: 'flex',
			align: { items: 'center' },
			gap: '10px',
			fontFamily: fonts.display,
			font: { weight: 800, size: '1.45rem' },
			color: 'white',
		},

		Footer_logo_mark: {
			width: '36px',
			height: '36px',
			background: { color: colors.accent },
			border: { radius: radius.sm },
			display: 'flex',
			align: { items: 'center' },
			justify: { content: 'center' },
			color: 'white',
			font: { size: '0.85rem', weight: 800 },
		},

		Footer_brand_text: {
			color: $mol_style_func.rgba(241, 240, 236, 0.45),
			font: { size: '0.88rem' },
			lineHeight: '1.7',
			margin: { top: '12px' },
			maxWidth: '280px',
		},

		Footer_nav_title: {
			font: { size: '0.75rem', weight: 600 },
			textTransform: 'uppercase',
			letterSpacing: '0.08em',
			color: $mol_style_func.rgba(241, 240, 236, 0.35),
			margin: { bottom: '16px' },
		},

		Footer_contacts_title: {
			font: { size: '0.75rem', weight: 600 },
			textTransform: 'uppercase',
			letterSpacing: '0.08em',
			color: $mol_style_func.rgba(241, 240, 236, 0.35),
			margin: { bottom: '16px' },
		},

		Footer_info_title: {
			font: { size: '0.75rem', weight: 600 },
			textTransform: 'uppercase',
			letterSpacing: '0.08em',
			color: $mol_style_func.rgba(241, 240, 236, 0.35),
			margin: { bottom: '16px' },
		},

		Footer_nav_links: {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},
		Footer_contacts_links: {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},
		Footer_info_links: {
			display: 'flex',
			flexDirection: 'column',
			gap: '10px',
		},

		Footer_bottom: {
			borderTop: '1px solid rgba(241, 240, 236, 0.08)',
			padding: { top: '24px' },
			display: 'flex',
			justify: { content: 'space-between' },
			align: { items: 'center' },
			gap: '12px',
			flexWrap: 'wrap',
		},

		Footer_copy: {
			font: { size: '0.8rem' },
			color: $mol_style_func.rgba(241, 240, 236, 0.3),
		},

		Footer_location: {
			font: { size: '0.8rem' },
			color: $mol_style_func.rgba(241, 240, 236, 0.3),
		},

		'@media': {
			'screen and (max-width: 768px)': {
				Footer_grid: {
					gap: '28px',
				},
				Footer_bottom: {
					flexDirection: 'column',
					gap: '12px',
					textAlign: 'center',
				},
			},
		},
	})

	$mol_style_define($bog_brl_footer_link, {
		font: { size: '0.88rem' },
		color: $mol_style_func.rgba(241, 240, 236, 0.6),
		transition,
		cursor: 'pointer',
		':hover': {
			color: 'white',
		},
	})
}
