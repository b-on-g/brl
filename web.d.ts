declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $ {

	type $mol_switch__value_mol_deck_1 = $mol_type_enforce<
		ReturnType< $mol_deck['current'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_mol_deck_2 = $mol_type_enforce<
		ReturnType< $mol_deck['switch_options'] >
		,
		ReturnType< $mol_switch['options'] >
	>
	export class $mol_deck extends $mol_list {
		current( next?: string ): string
		switch_options( ): Record<string, any>
		Switch( ): $mol_switch
		Content( ): $mol_view
		items( ): readonly($mol_view)[]
		rows( ): readonly($mol_view)[]
	}
	
}

//# sourceMappingURL=deck.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__sub_mol_text_code_line_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_line_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_line_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_line_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_line_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_line_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_line_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_line extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_code_line__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_line['numb'] >
	>
	type $mol_text_code_line__theme_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_theme'] >
		,
		ReturnType< $mol_text_code_line['theme'] >
	>
	type $mol_text_code_line__text_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__syntax_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__highlight_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_9 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_11 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_theme( id: any): string
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_line
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		row_themes( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $ {

	type $mol_grid_table__sub_mol_grid_1 = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle_mol_grid_2 = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_grid_3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells_mol_grid_4 = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height_mol_grid_5 = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width_mol_grid_6 = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells_mol_grid_7 = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub_mol_grid_8 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub_mol_grid_9 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name_mol_grid_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub_mol_grid_11 = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level_mol_grid_12 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label_mol_grid_13 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded_mol_grid_14 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		title( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__uri_mol_link_iconed_1 = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_mol_link_iconed_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_link__uri_mol_embed_native_1 = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_mol_embed_native_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		uri( next?: string ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'src': ReturnType< $mol_embed_native['uri'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		allow( ): string
		html( ): any
		attr( ): ({ 
			'tabindex': ReturnType< $mol_frame['tabindex'] >,
			'allow': ReturnType< $mol_frame['allow'] >,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
		}) 
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__title_mol_embed_service_1 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_service_2 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title_mol_embed_service_3 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri_mol_embed_service_4 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_service extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_service['active'] > ): ReturnType< $mol_embed_service['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=service.view.tree.d.ts.map
declare namespace $ {

	export class $mol_embed_youtube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_embed_rutube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=rutube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_embed_vklive extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=vklive.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__title_mol_embed_any_1 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_any_2 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title_mol_embed_any_3 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri_mol_embed_any_4 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title_mol_embed_any_5 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri_mol_embed_any_6 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	type $mol_embed_rutube__title_mol_embed_any_7 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_rutube['title'] >
	>
	type $mol_embed_rutube__uri_mol_embed_any_8 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_rutube['uri'] >
	>
	type $mol_embed_vklive__title_mol_embed_any_9 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_vklive['title'] >
	>
	type $mol_embed_vklive__uri_mol_embed_any_10 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_vklive['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
		Rutube( ): $mol_embed_rutube
		Vklive( ): $mol_embed_vklive
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $ {

	type $mol_text__text_mol_text_1 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_mol_text_2 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_content'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_paragraph__sub_mol_text_3 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__uri_resolve_mol_text_4 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_5 = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_6 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__auto_scroll_mol_text_7 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text_list__uri_resolve_mol_text_8 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__type_mol_text_9 = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text_mol_text_10 = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight_mol_text_11 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_header__minimal_height_mol_text_12 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level_mol_text_13 = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content_mol_text_14 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg_mol_text_15 = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text_mol_text_16 = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__row_themes_mol_text_17 = $mol_type_enforce<
		ReturnType< $mol_text['pre_themes'] >
		,
		ReturnType< $mol_text_code['row_themes'] >
	>
	type $mol_text_code__highlight_mol_text_18 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve_mol_text_19 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed_mol_text_20 = $mol_type_enforce<
		ReturnType< $mol_text['pre_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name_mol_text_21 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells_mol_text_22 = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows_mol_text_23 = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_24 = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_25 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_26 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_27 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_28 = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_grid__rows_mol_text_29 = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_30 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_31 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_32 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_33 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__text_mol_text_34 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_dimmer__dom_name_mol_text_35 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle_mol_text_36 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_text_37 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name_mol_text_38 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type_mol_text_39 = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub_mol_text_40 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_line__numb_showed_mol_text_41 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__highlight_mol_text_42 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_text_code_line__text_mol_text_43 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_44 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__syntax_mol_text_45 = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_link_iconed__uri_mol_text_46 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_47 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri_mol_text_48 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_49 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri_mol_text_50 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title_mol_text_51 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	type $mol_expander__label_mol_text_52 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content_mol_text_53 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		uri_resolve( id: any): string
		quote_text( id: any): string
		highlight( ): string
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		pre_themes( id: any): readonly(string)[]
		code_sidebar_showed( ): boolean
		pre_sidebar_showed( ): ReturnType< $mol_text['code_sidebar_showed'] >
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		spoiler_label( id: any): string
		Spoiler_label( id: any): $mol_text
		spoiler_content( id: any): string
		Spoiler_content( id: any): $mol_text
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_line
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
		Spoiler( id: any): $mol_expander
	}
	
	type $mol_link__arg_mol_text_header_1 = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_text_header_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_text_header_3 = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_ghost extends $mol_view {
		Sub( ): $mol_view
	}
	
}

//# sourceMappingURL=ghost.view.tree.d.ts.map
declare namespace $ {

	export class $mol_follower extends $mol_ghost {
		transform( ): string
		Anchor( ): $mol_view
		align( ): readonly(number)[]
		offset( ): readonly(number)[]
		style( ): ({ 
			'transform': ReturnType< $mol_follower['transform'] >,
		})  & ReturnType< $mol_ghost['style'] >
	}
	
}

//# sourceMappingURL=follower.view.tree.d.ts.map
declare namespace $ {

	type $mol_pop_bubble__content_mol_pop_1 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_content'] >
		,
		ReturnType< $mol_pop_bubble['content'] >
	>
	type $mol_pop_bubble__height_max_mol_pop_2 = $mol_type_enforce<
		ReturnType< $mol_pop['height_max'] >
		,
		ReturnType< $mol_pop_bubble['height_max'] >
	>
	type $mol_follower__offset_mol_pop_3 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_offset'] >
		,
		ReturnType< $mol_follower['offset'] >
	>
	type $mol_follower__align_mol_pop_4 = $mol_type_enforce<
		ReturnType< $mol_pop['bubble_align'] >
		,
		ReturnType< $mol_follower['align'] >
	>
	type $mol_follower__Anchor_mol_pop_5 = $mol_type_enforce<
		ReturnType< $mol_pop['Anchor'] >
		,
		ReturnType< $mol_follower['Anchor'] >
	>
	type $mol_follower__Sub_mol_pop_6 = $mol_type_enforce<
		ReturnType< $mol_pop['Bubble'] >
		,
		ReturnType< $mol_follower['Sub'] >
	>
	export class $mol_pop extends $mol_view {
		bubble( ): any
		Anchor( ): any
		bubble_offset( ): readonly(number)[]
		bubble_align( ): readonly(number)[]
		bubble_content( ): readonly($mol_view_content)[]
		height_max( ): number
		Bubble( ): $mol_pop_bubble
		Follower( ): $mol_follower
		showed( next?: boolean ): boolean
		align_vert( ): string
		align_hor( ): string
		align( ): string
		prefer( ): string
		auto( ): readonly(any)[]
		sub( ): readonly(any)[]
		sub_visible( ): readonly(any)[]
	}
	
	export class $mol_pop_bubble extends $mol_view {
		content( ): readonly($mol_view_content)[]
		height_max( ): number
		sub( ): ReturnType< $mol_pop_bubble['content'] >
		style( ): ({ 
			'maxHeight': ReturnType< $mol_pop_bubble['height_max'] >,
		})  & ReturnType< $mol_view['style'] >
		attr( ): ({ 
			'tabindex': number,
			'popover': string,
		})  & ReturnType< $mol_view['attr'] >
	}
	
}

//# sourceMappingURL=pop.view.tree.d.ts.map
declare namespace $ {

	type $mol_check__minimal_width_mol_pick_1 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_width'] >
	>
	type $mol_check__minimal_height_mol_pick_2 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	type $mol_check__enabled_mol_pick_3 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__checked_mol_pick_4 = $mol_type_enforce<
		ReturnType< $mol_pick['showed'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__clicks_mol_pick_5 = $mol_type_enforce<
		ReturnType< $mol_pick['clicks'] >
		,
		ReturnType< $mol_check['clicks'] >
	>
	type $mol_check__sub_mol_pick_6 = $mol_type_enforce<
		ReturnType< $mol_pick['trigger_content'] >
		,
		ReturnType< $mol_check['sub'] >
	>
	type $mol_check__hint_mol_pick_7 = $mol_type_enforce<
		ReturnType< $mol_pick['hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	export class $mol_pick extends $mol_pop {
		keydown( next?: any ): any
		trigger_enabled( ): boolean
		clicks( next?: any ): any
		trigger_content( ): readonly($mol_view_content)[]
		hint( ): string
		Trigger( ): $mol_check
		event( ): ({ 
			keydown( next?: ReturnType< $mol_pick['keydown'] > ): ReturnType< $mol_pick['keydown'] >,
		})  & ReturnType< $mol_pop['event'] >
		Anchor( ): ReturnType< $mol_pick['Trigger'] >
	}
	
}

//# sourceMappingURL=pick.view.tree.d.ts.map
declare namespace $ {

	export class $mol_nav extends $mol_plugin {
		event_key( next?: any ): any
		cycle( next?: boolean ): boolean
		mod_ctrl( ): boolean
		mod_shift( ): boolean
		mod_alt( ): boolean
		keys_x( next?: readonly(any)[] ): readonly(any)[]
		keys_y( next?: readonly(any)[] ): readonly(any)[]
		current_x( next?: any ): any
		current_y( next?: any ): any
		event_up( next?: any ): any
		event_down( next?: any ): any
		event_left( next?: any ): any
		event_right( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_nav['event_key'] > ): ReturnType< $mol_nav['event_key'] >,
		})  & ReturnType< $mol_plugin['event'] >
	}
	
}

//# sourceMappingURL=nav.view.tree.d.ts.map
declare namespace $ {

	export class $mol_hotkey extends $mol_plugin {
		keydown( next?: any ): any
		event( ): ({ 
			keydown( next?: ReturnType< $mol_hotkey['keydown'] > ): ReturnType< $mol_hotkey['keydown'] >,
		})  & ReturnType< $mol_plugin['event'] >
		key( ): Record<string, any>
		mod_ctrl( ): boolean
		mod_alt( ): boolean
		mod_shift( ): boolean
	}
	
}

//# sourceMappingURL=hotkey.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__mod_ctrl_mol_string_1 = $mol_type_enforce<
		ReturnType< $mol_string['submit_with_ctrl'] >
		,
		ReturnType< $mol_hotkey['mod_ctrl'] >
	>
	type $mol_hotkey__key_mol_string_2 = $mol_type_enforce<
		({ 
			enter( next?: ReturnType< $mol_string['submit'] > ): ReturnType< $mol_string['submit'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	export class $mol_string extends $mol_view {
		selection_watcher( ): any
		error_report( ): any
		disabled( ): boolean
		value( next?: string ): string
		value_changed( next?: ReturnType< $mol_string['value'] > ): ReturnType< $mol_string['value'] >
		hint( ): string
		hint_visible( ): ReturnType< $mol_string['hint'] >
		spellcheck( ): boolean
		autocomplete_native( ): string
		selection_end( ): number
		selection_start( ): number
		keyboard( ): string
		enter( ): string
		length_max( ): number
		type( next?: string ): string
		event_change( next?: any ): any
		submit_with_ctrl( ): boolean
		submit( next?: any ): any
		Submit( ): $mol_hotkey
		dom_name( ): string
		enabled( ): boolean
		minimal_height( ): number
		autocomplete( ): boolean
		selection( next?: readonly(number)[] ): readonly(number)[]
		auto( ): readonly(any)[]
		field( ): ({ 
			'disabled': ReturnType< $mol_string['disabled'] >,
			'value': ReturnType< $mol_string['value_changed'] >,
			'placeholder': ReturnType< $mol_string['hint_visible'] >,
			'spellcheck': ReturnType< $mol_string['spellcheck'] >,
			'autocomplete': ReturnType< $mol_string['autocomplete_native'] >,
			'selectionEnd': ReturnType< $mol_string['selection_end'] >,
			'selectionStart': ReturnType< $mol_string['selection_start'] >,
			'inputMode': ReturnType< $mol_string['keyboard'] >,
			'enterkeyhint': ReturnType< $mol_string['enter'] >,
		})  & ReturnType< $mol_view['field'] >
		attr( ): ({ 
			'maxlength': ReturnType< $mol_string['length_max'] >,
			'type': ReturnType< $mol_string['type'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			input( next?: ReturnType< $mol_string['event_change'] > ): ReturnType< $mol_string['event_change'] >,
		})  & ReturnType< $mol_view['event'] >
		plugins( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=string.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_close extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=close.view.tree.d.ts.map
declare namespace $ {

	type $mol_hotkey__key_mol_search_1 = $mol_type_enforce<
		({ 
			escape( next?: ReturnType< $mol_search['clear'] > ): ReturnType< $mol_search['clear'] >,
		}) 
		,
		ReturnType< $mol_hotkey['key'] >
	>
	type $mol_nav__keys_y_mol_search_2 = $mol_type_enforce<
		ReturnType< $mol_search['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_search_3 = $mol_type_enforce<
		ReturnType< $mol_search['nav_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_string__value_mol_search_4 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_mol_search_5 = $mol_type_enforce<
		ReturnType< $mol_search['hint'] >
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_string__submit_mol_search_6 = $mol_type_enforce<
		ReturnType< $mol_search['submit'] >
		,
		ReturnType< $mol_string['submit'] >
	>
	type $mol_string__enabled_mol_search_7 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_string['enabled'] >
	>
	type $mol_string__keyboard_mol_search_8 = $mol_type_enforce<
		ReturnType< $mol_search['keyboard'] >
		,
		ReturnType< $mol_string['keyboard'] >
	>
	type $mol_string__enter_mol_search_9 = $mol_type_enforce<
		ReturnType< $mol_search['enter'] >
		,
		ReturnType< $mol_string['enter'] >
	>
	type $mol_button_minor__hint_mol_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__enabled_mol_search_11 = $mol_type_enforce<
		ReturnType< $mol_search['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__click_mol_search_12 = $mol_type_enforce<
		ReturnType< $mol_search['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_list__rows_mol_search_14 = $mol_type_enforce<
		ReturnType< $mol_search['menu_items'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_search_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_dimmer__haystack_mol_search_16 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_search_17 = $mol_type_enforce<
		ReturnType< $mol_search['query'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_search_plugins__18 = $mol_type_enforce<
		ReturnType< $mol_pop['plugins'] >[number]
		,
		$mol_plugin
	>
	type $mol_view__sub_mol_search_19 = $mol_type_enforce<
		ReturnType< $mol_search['anchor_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button_minor__click_mol_search_20 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_select'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_mol_search_21 = $mol_type_enforce<
		ReturnType< $mol_search['suggest_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $mol_search extends $mol_pop {
		clear( next?: any ): any
		Hotkey( ): $mol_hotkey
		nav_components( ): readonly($mol_view)[]
		nav_focused( next?: any ): any
		Nav( ): $mol_nav
		suggests_showed( next?: boolean ): boolean
		query( next?: string ): string
		hint( ): string
		submit( next?: any ): any
		enabled( ): boolean
		keyboard( ): string
		enter( ): string
		bring( ): ReturnType< ReturnType< $mol_search['Query'] >['bring'] >
		Query( ): $mol_string
		Clear_icon( ): $mol_icon_close
		Clear( ): $mol_button_minor
		anchor_content( ): readonly(any)[]
		menu_items( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		suggest_select( id: any, next?: any ): any
		suggest_label( id: any): string
		Suggest_label( id: any): $mol_dimmer
		suggest_content( id: any): readonly($mol_view_content)[]
		suggests( ): readonly(string)[]
		plugins( ): readonly($mol_plugin)[]
		showed( next?: ReturnType< $mol_search['suggests_showed'] > ): ReturnType< $mol_search['suggests_showed'] >
		align_hor( ): string
		Anchor( ): $mol_view
		bubble_content( ): readonly($mol_view_content)[]
		Suggest( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_dots_vertical extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=vertical.view.tree.d.ts.map
declare namespace $ {

	type $mol_dimmer__haystack_mol_select_1 = $mol_type_enforce<
		ReturnType< $mol_select['option_label'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_dimmer__needle_mol_select_2 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_nav__keys_y_mol_select_3 = $mol_type_enforce<
		ReturnType< $mol_select['nav_components'] >
		,
		ReturnType< $mol_nav['keys_y'] >
	>
	type $mol_nav__current_y_mol_select_4 = $mol_type_enforce<
		ReturnType< $mol_select['option_focused'] >
		,
		ReturnType< $mol_nav['current_y'] >
	>
	type $mol_nav__cycle_mol_select_5 = $mol_type_enforce<
		ReturnType< $mol_select['nav_cycle'] >
		,
		ReturnType< $mol_nav['cycle'] >
	>
	type $mol_list__rows_mol_select_6 = $mol_type_enforce<
		ReturnType< $mol_select['menu_content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_scroll__sub_mol_select_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_button_minor__enabled_mol_select_8 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__event_click_mol_select_9 = $mol_type_enforce<
		ReturnType< $mol_select['event_select'] >
		,
		ReturnType< $mol_button_minor['event_click'] >
	>
	type $mol_button_minor__sub_mol_select_10 = $mol_type_enforce<
		ReturnType< $mol_select['option_content'] >
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_view__sub_mol_select_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_search__query_mol_select_12 = $mol_type_enforce<
		ReturnType< $mol_select['filter_pattern'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__hint_mol_select_13 = $mol_type_enforce<
		ReturnType< $mol_select['filter_hint'] >
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__submit_mol_select_14 = $mol_type_enforce<
		ReturnType< $mol_select['submit'] >
		,
		ReturnType< $mol_search['submit'] >
	>
	type $mol_search__enabled_mol_select_15 = $mol_type_enforce<
		ReturnType< $mol_select['enabled'] >
		,
		ReturnType< $mol_search['enabled'] >
	>
	export class $mol_select extends $mol_pick {
		enabled( ): boolean
		event_select( id: any, next?: any ): any
		option_label( id: any): string
		filter_pattern( next?: string ): string
		Option_label( id: any): $mol_dimmer
		option_content( id: any): readonly(any)[]
		no_options_message( ): string
		nav_components( ): readonly($mol_view)[]
		option_focused( next?: any ): any
		nav_cycle( next?: boolean ): boolean
		Nav( ): $mol_nav
		menu_content( ): readonly($mol_view)[]
		Menu( ): $mol_list
		Bubble_pane( ): $mol_scroll
		filter_hint( ): string
		submit( next?: any ): any
		dictionary( next?: Record<string, any> ): Record<string, any>
		options( ): readonly(string)[]
		value( next?: string ): string
		option_label_default( ): string
		Option_row( id: any): $mol_button_minor
		No_options( ): $mol_view
		plugins( ): readonly(any)[]
		hint( ): string
		bubble_content( ): readonly(any)[]
		Filter( ): $mol_search
		Trigger_icon( ): $mol_icon_dots_vertical
		trigger_enabled( ): ReturnType< $mol_select['enabled'] >
	}
	
}

//# sourceMappingURL=select.view.tree.d.ts.map
declare namespace $ {

	type $mol_text_list_item__index_mol_text_list_1 = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub_mol_text_list_2 = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $bog_brl_header__page_bog_brl_1 = $mol_type_enforce<
		ReturnType< $bog_brl['page'] >
		,
		ReturnType< $bog_brl_header['page'] >
	>
	type $bog_brl_header__mobile_open_bog_brl_2 = $mol_type_enforce<
		ReturnType< $bog_brl['mobile_open'] >
		,
		ReturnType< $bog_brl_header['mobile_open'] >
	>
	type $bog_brl_mobile_nav__page_bog_brl_3 = $mol_type_enforce<
		ReturnType< $bog_brl['page'] >
		,
		ReturnType< $bog_brl_mobile_nav['page'] >
	>
	type $bog_brl_mobile_nav__mobile_open_bog_brl_4 = $mol_type_enforce<
		ReturnType< $bog_brl['mobile_open'] >
		,
		ReturnType< $bog_brl_mobile_nav['mobile_open'] >
	>
	type $bog_brl_property__property_id_bog_brl_5 = $mol_type_enforce<
		ReturnType< $bog_brl['property_id'] >
		,
		ReturnType< $bog_brl_property['property_id'] >
	>
	type $bog_brl_deck__items_bog_brl_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_deck['items'] >
	>
	type $bog_brl_deck__current_bog_brl_7 = $mol_type_enforce<
		ReturnType< $bog_brl['page_index'] >
		,
		ReturnType< $bog_brl_deck['current'] >
	>
	type $bog_brl_footer__page_bog_brl_8 = $mol_type_enforce<
		ReturnType< $bog_brl['page'] >
		,
		ReturnType< $bog_brl_footer['page'] >
	>
	export class $bog_brl extends $mol_view {
		page( next?: string ): string
		mobile_open( next?: boolean ): boolean
		Header( ): $bog_brl_header
		Mobile_nav( ): $bog_brl_mobile_nav
		Home_page( ): $bog_brl_home
		Catalog_page( ): $bog_brl_catalog
		property_id( next?: any ): any
		Property_page( ): $bog_brl_property
		Landlords_page( ): $bog_brl_landlords
		About_page( ): $bog_brl_about
		Contacts_page( ): $bog_brl_contacts
		page_index( ): string
		Deck( ): $bog_brl_deck
		Footer( ): $bog_brl_footer
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_deck extends $mol_deck {
		Switch( ): any
	}
	
	type $mol_view__sub_bog_brl_header_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_header_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__uri_bog_brl_header_3 = $mol_type_enforce<
		ReturnType< $bog_brl_header['home_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_bog_brl_header_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $bog_brl_nav_link__label_bog_brl_header_5 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_nav_link['label'] >
	>
	type $bog_brl_nav_link__uri_bog_brl_header_6 = $mol_type_enforce<
		ReturnType< $bog_brl_header['home_link'] >
		,
		ReturnType< $bog_brl_nav_link['uri'] >
	>
	type $bog_brl_nav_link__label_bog_brl_header_7 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_nav_link['label'] >
	>
	type $bog_brl_nav_link__uri_bog_brl_header_8 = $mol_type_enforce<
		ReturnType< $bog_brl_header['catalog_link'] >
		,
		ReturnType< $bog_brl_nav_link['uri'] >
	>
	type $bog_brl_nav_link__label_bog_brl_header_9 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_nav_link['label'] >
	>
	type $bog_brl_nav_link__uri_bog_brl_header_10 = $mol_type_enforce<
		ReturnType< $bog_brl_header['landlords_link'] >
		,
		ReturnType< $bog_brl_nav_link['uri'] >
	>
	type $bog_brl_nav_link__label_bog_brl_header_11 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_nav_link['label'] >
	>
	type $bog_brl_nav_link__uri_bog_brl_header_12 = $mol_type_enforce<
		ReturnType< $bog_brl_header['about_link'] >
		,
		ReturnType< $bog_brl_nav_link['uri'] >
	>
	type $bog_brl_nav_link__label_bog_brl_header_13 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_nav_link['label'] >
	>
	type $bog_brl_nav_link__uri_bog_brl_header_14 = $mol_type_enforce<
		ReturnType< $bog_brl_header['contacts_link'] >
		,
		ReturnType< $bog_brl_nav_link['uri'] >
	>
	type $bog_brl_nav_cta__uri_bog_brl_header_15 = $mol_type_enforce<
		ReturnType< $bog_brl_header['telegram_url'] >
		,
		ReturnType< $bog_brl_nav_cta['uri'] >
	>
	type $mol_view__sub_bog_brl_header_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_burger__click_bog_brl_header_17 = $mol_type_enforce<
		ReturnType< $bog_brl_header['burger_toggle'] >
		,
		ReturnType< $bog_brl_burger['click'] >
	>
	type $bog_brl_container__sub_bog_brl_header_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	export class $bog_brl_header extends $mol_view {
		home_link( ): string
		Logo_mark( ): $mol_view
		Logo_text( ): $mol_view
		Logo( ): $mol_link
		Nav_home( ): $bog_brl_nav_link
		catalog_link( ): string
		Nav_catalog( ): $bog_brl_nav_link
		landlords_link( ): string
		Nav_landlords( ): $bog_brl_nav_link
		about_link( ): string
		Nav_about( ): $bog_brl_nav_link
		contacts_link( ): string
		Nav_contacts( ): $bog_brl_nav_link
		telegram_url( ): string
		Nav_cta( ): $bog_brl_nav_cta
		Nav( ): $mol_view
		burger_toggle( next?: any ): any
		Burger( ): $bog_brl_burger
		Header_inner( ): $bog_brl_container
		page( next?: string ): string
		mobile_open( next?: boolean ): boolean
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_nav_link extends $mol_link {
		label( ): string
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_nav_cta_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_nav_cta_2 = $mol_type_enforce<
		ReturnType< $bog_brl_nav_cta['label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_nav_cta extends $mol_link {
		Nav_cta_icon( ): $mol_view
		label( ): string
		Nav_cta_text( ): $mol_text
		attr( ): ({ 
			'target': string,
			'rel': string,
		})  & ReturnType< $mol_link['attr'] >
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_burger extends $mol_button {
		Burger_line_1( ): $mol_view
		Burger_line_2( ): $mol_view
		Burger_line_3( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $bog_brl_mobile_link__label_bog_brl_mobile_nav_1 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_mobile_link['label'] >
	>
	type $bog_brl_mobile_link__click_bog_brl_mobile_nav_2 = $mol_type_enforce<
		ReturnType< $bog_brl_mobile_nav['mobile_home_click'] >
		,
		ReturnType< $bog_brl_mobile_link['click'] >
	>
	type $bog_brl_mobile_link__label_bog_brl_mobile_nav_3 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_mobile_link['label'] >
	>
	type $bog_brl_mobile_link__click_bog_brl_mobile_nav_4 = $mol_type_enforce<
		ReturnType< $bog_brl_mobile_nav['mobile_catalog_click'] >
		,
		ReturnType< $bog_brl_mobile_link['click'] >
	>
	type $bog_brl_mobile_link__label_bog_brl_mobile_nav_5 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_mobile_link['label'] >
	>
	type $bog_brl_mobile_link__click_bog_brl_mobile_nav_6 = $mol_type_enforce<
		ReturnType< $bog_brl_mobile_nav['mobile_landlords_click'] >
		,
		ReturnType< $bog_brl_mobile_link['click'] >
	>
	type $bog_brl_mobile_link__label_bog_brl_mobile_nav_7 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_mobile_link['label'] >
	>
	type $bog_brl_mobile_link__click_bog_brl_mobile_nav_8 = $mol_type_enforce<
		ReturnType< $bog_brl_mobile_nav['mobile_about_click'] >
		,
		ReturnType< $bog_brl_mobile_link['click'] >
	>
	type $bog_brl_mobile_link__label_bog_brl_mobile_nav_9 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_mobile_link['label'] >
	>
	type $bog_brl_mobile_link__click_bog_brl_mobile_nav_10 = $mol_type_enforce<
		ReturnType< $bog_brl_mobile_nav['mobile_contacts_click'] >
		,
		ReturnType< $bog_brl_mobile_link['click'] >
	>
	type $bog_brl_btn_telegram__label_bog_brl_mobile_nav_11 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_btn_telegram['label'] >
	>
	type $bog_brl_btn_telegram__uri_bog_brl_mobile_nav_12 = $mol_type_enforce<
		ReturnType< $bog_brl_mobile_nav['telegram_url'] >
		,
		ReturnType< $bog_brl_btn_telegram['uri'] >
	>
	export class $bog_brl_mobile_nav extends $mol_view {
		mobile_open( next?: boolean ): boolean
		mobile_home_click( next?: any ): any
		Mobile_home( ): $bog_brl_mobile_link
		mobile_catalog_click( next?: any ): any
		Mobile_catalog( ): $bog_brl_mobile_link
		mobile_landlords_click( next?: any ): any
		Mobile_landlords( ): $bog_brl_mobile_link
		mobile_about_click( next?: any ): any
		Mobile_about( ): $bog_brl_mobile_link
		mobile_contacts_click( next?: any ): any
		Mobile_contacts( ): $bog_brl_mobile_link
		telegram_url( ): string
		Mobile_cta( ): $bog_brl_btn_telegram
		page( next?: string ): string
		attr( ): ({ 
			'bog_brl_mobile_nav_open': ReturnType< $bog_brl_mobile_nav['mobile_open'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_mobile_link extends $mol_button {
		label( ): string
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_btn_primary extends $mol_link {
		label( ): string
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_btn_telegram extends $mol_link {
		label( ): string
		attr( ): ({ 
			'target': string,
			'rel': string,
		})  & ReturnType< $mol_link['attr'] >
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_btn_phone extends $mol_link {
		label( ): string
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_container extends $mol_view {
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_stat_1 = $mol_type_enforce<
		ReturnType< $bog_brl_stat['number'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_stat_2 = $mol_type_enforce<
		ReturnType< $bog_brl_stat['label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_stat extends $mol_view {
		number( ): string
		Stat_number( ): $mol_text
		label( ): string
		Stat_label( ): $mol_text
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_step_1 = $mol_type_enforce<
		ReturnType< $bog_brl_step['num'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_step_2 = $mol_type_enforce<
		ReturnType< $bog_brl_step['icon'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_step_3 = $mol_type_enforce<
		ReturnType< $bog_brl_step['title'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_step_4 = $mol_type_enforce<
		ReturnType< $bog_brl_step['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_step extends $mol_view {
		num( ): string
		Step_num( ): $mol_text
		icon( ): string
		Step_icon( ): $mol_text
		title( ): string
		Step_title( ): $mol_text
		text( ): string
		Step_text( ): $mol_text
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_adv_1 = $mol_type_enforce<
		ReturnType< $bog_brl_adv['icon'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_adv_2 = $mol_type_enforce<
		ReturnType< $bog_brl_adv['title'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_adv_3 = $mol_type_enforce<
		ReturnType< $bog_brl_adv['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_adv extends $mol_view {
		theme( ): string
		icon( ): string
		Adv_icon( ): $mol_text
		title( ): string
		Adv_title( ): $mol_text
		text( ): string
		Adv_text( ): $mol_text
		attr( ): ({ 
			'bog_brl_adv_theme': ReturnType< $bog_brl_adv['theme'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
	type $mol_image__uri_bog_brl_property_card_1 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['image'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_text__text_bog_brl_property_card_2 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['badge'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_property_card_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_property_card_4 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['price'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_property_card_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_property_card_7 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['address'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_property_card_8 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['meta_rooms'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_property_card_9 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['meta_area'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_property_card_10 = $mol_type_enforce<
		ReturnType< $bog_brl_property_card['meta_floor'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_property_card_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_card_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_property_card extends $mol_link {
		badge_house( ): boolean
		image( ): string
		Card_image_pic( ): $mol_image
		badge( ): string
		Card_badge( ): $mol_text
		Card_image( ): $mol_view
		price( ): string
		Card_price_value( ): $mol_text
		Card_price_unit( ): $mol_view
		Card_price( ): $mol_view
		address( ): string
		Card_address( ): $mol_text
		meta_rooms( ): string
		Card_meta_rooms( ): $mol_text
		meta_area( ): string
		Card_meta_area( ): $mol_text
		meta_floor( ): string
		Card_meta_floor( ): $mol_text
		Card_meta( ): $mol_view
		Card_body( ): $mol_view
		attr( ): ({ 
			'bog_brl_property_badge_house': ReturnType< $bog_brl_property_card['badge_house'] >,
		})  & ReturnType< $mol_link['attr'] >
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_gallery_dot extends $mol_button {
		active( ): boolean
		attr( ): ({ 
			'bog_brl_gallery_dot_active': ReturnType< $bog_brl_gallery_dot['active'] >,
		})  & ReturnType< $mol_button['attr'] >
	}
	
	type $mol_view__sub_bog_brl_feature_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_feature_2 = $mol_type_enforce<
		ReturnType< $bog_brl_feature['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_feature extends $mol_view {
		Feature_check( ): $mol_view
		text( ): string
		Feature_text( ): $mol_text
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_spec_1 = $mol_type_enforce<
		ReturnType< $bog_brl_spec['label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_spec_2 = $mol_type_enforce<
		ReturnType< $bog_brl_spec['value'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_spec extends $mol_view {
		label( ): string
		Spec_label( ): $mol_text
		value( ): string
		Spec_value( ): $mol_text
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_deal_row_1 = $mol_type_enforce<
		ReturnType< $bog_brl_deal_row['label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_deal_row_2 = $mol_type_enforce<
		ReturnType< $bog_brl_deal_row['value'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_deal_row extends $mol_view {
		label( ): string
		Deal_label( ): $mol_text
		value( ): string
		Deal_value( ): $mol_text
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_landlord_benefit_1 = $mol_type_enforce<
		ReturnType< $bog_brl_landlord_benefit['icon'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_landlord_benefit_2 = $mol_type_enforce<
		ReturnType< $bog_brl_landlord_benefit['title'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_landlord_benefit_3 = $mol_type_enforce<
		ReturnType< $bog_brl_landlord_benefit['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_landlord_benefit_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_landlord_benefit extends $mol_view {
		icon( ): string
		Benefit_icon( ): $mol_text
		title( ): string
		Benefit_title( ): $mol_text
		text( ): string
		Benefit_text( ): $mol_text
		Benefit_body( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_commission_item_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_commission_item_2 = $mol_type_enforce<
		ReturnType< $bog_brl_commission_item['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_commission_item extends $mol_view {
		Commission_check( ): $mol_view
		text( ): string
		Commission_text( ): $mol_text
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_about_value_1 = $mol_type_enforce<
		ReturnType< $bog_brl_about_value['icon'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_about_value_2 = $mol_type_enforce<
		ReturnType< $bog_brl_about_value['title'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_about_value_3 = $mol_type_enforce<
		ReturnType< $bog_brl_about_value['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_about_value_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_about_value extends $mol_view {
		icon( ): string
		About_value_icon( ): $mol_text
		title( ): string
		About_value_title( ): $mol_text
		text( ): string
		About_value_text( ): $mol_text
		About_value_body( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_text__text_bog_brl_contact_card_1 = $mol_type_enforce<
		ReturnType< $bog_brl_contact_card['icon'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_contact_card_2 = $mol_type_enforce<
		ReturnType< $bog_brl_contact_card['title'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_contact_card_3 = $mol_type_enforce<
		ReturnType< $bog_brl_contact_card['text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_contact_card_4 = $mol_type_enforce<
		ReturnType< $bog_brl_contact_card['link_label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_link__uri_bog_brl_contact_card_5 = $mol_type_enforce<
		ReturnType< $bog_brl_contact_card['link_uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_bog_brl_contact_card_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_text__text_bog_brl_contact_card_7 = $mol_type_enforce<
		ReturnType< $bog_brl_contact_card['note'] >
		,
		ReturnType< $mol_text['text'] >
	>
	export class $bog_brl_contact_card extends $mol_view {
		theme( ): string
		icon( ): string
		Contact_icon( ): $mol_text
		title( ): string
		Contact_title( ): $mol_text
		text( ): string
		Contact_text( ): $mol_text
		link_uri( ): string
		link_label( ): string
		Contact_link_text( ): $mol_text
		Contact_link( next?: $mol_link ): $mol_link
		note( ): string
		Contact_note( next?: $mol_text ): $mol_text
		attr( ): ({ 
			'bog_brl_contact_card_theme': ReturnType< $bog_brl_contact_card['theme'] >,
		}) 
		sub( ): readonly(any)[]
	}
	
	export class $bog_brl_footer_link extends $mol_link {
		label( ): string
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_home_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_10 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_btn_primary__label_bog_brl_home_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_btn_primary['label'] >
	>
	type $bog_brl_btn_primary__uri_bog_brl_home_13 = $mol_type_enforce<
		ReturnType< $bog_brl_home['catalog_link'] >
		,
		ReturnType< $bog_brl_btn_primary['uri'] >
	>
	type $bog_brl_btn_telegram__label_bog_brl_home_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_btn_telegram['label'] >
	>
	type $bog_brl_btn_telegram__uri_bog_brl_home_15 = $mol_type_enforce<
		ReturnType< $bog_brl_home['telegram_url'] >
		,
		ReturnType< $bog_brl_btn_telegram['uri'] >
	>
	type $mol_view__sub_bog_brl_home_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_stat__number_bog_brl_home_18 = $mol_type_enforce<
		ReturnType< $bog_brl_home['stat_number'] >
		,
		ReturnType< $bog_brl_stat['number'] >
	>
	type $bog_brl_stat__label_bog_brl_home_19 = $mol_type_enforce<
		ReturnType< $bog_brl_home['stat_label'] >
		,
		ReturnType< $bog_brl_stat['label'] >
	>
	type $mol_view__sub_bog_brl_home_20 = $mol_type_enforce<
		ReturnType< $bog_brl_home['stats_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_home_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_home_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_24 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_step__num_bog_brl_home_26 = $mol_type_enforce<
		ReturnType< $bog_brl_home['step_num'] >
		,
		ReturnType< $bog_brl_step['num'] >
	>
	type $bog_brl_step__icon_bog_brl_home_27 = $mol_type_enforce<
		ReturnType< $bog_brl_home['step_icon'] >
		,
		ReturnType< $bog_brl_step['icon'] >
	>
	type $bog_brl_step__title_bog_brl_home_28 = $mol_type_enforce<
		ReturnType< $bog_brl_home['step_title'] >
		,
		ReturnType< $bog_brl_step['title'] >
	>
	type $bog_brl_step__text_bog_brl_home_29 = $mol_type_enforce<
		ReturnType< $bog_brl_home['step_text'] >
		,
		ReturnType< $bog_brl_step['text'] >
	>
	type $mol_view__sub_bog_brl_home_30 = $mol_type_enforce<
		ReturnType< $bog_brl_home['steps_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_home_31 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_home_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_home_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_adv__icon_bog_brl_home_36 = $mol_type_enforce<
		ReturnType< $bog_brl_home['adv_icon'] >
		,
		ReturnType< $bog_brl_adv['icon'] >
	>
	type $bog_brl_adv__theme_bog_brl_home_37 = $mol_type_enforce<
		ReturnType< $bog_brl_home['adv_theme'] >
		,
		ReturnType< $bog_brl_adv['theme'] >
	>
	type $bog_brl_adv__title_bog_brl_home_38 = $mol_type_enforce<
		ReturnType< $bog_brl_home['adv_title'] >
		,
		ReturnType< $bog_brl_adv['title'] >
	>
	type $bog_brl_adv__text_bog_brl_home_39 = $mol_type_enforce<
		ReturnType< $bog_brl_home['adv_text'] >
		,
		ReturnType< $bog_brl_adv['text'] >
	>
	type $mol_view__sub_bog_brl_home_40 = $mol_type_enforce<
		ReturnType< $bog_brl_home['advantages_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_home_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_home_42 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_home extends $mol_view {
		Hero_badge_dot( ): $mol_view
		Hero_badge_text( ): $mol_view
		Hero_badge( ): $mol_view
		Hero_title_prefix( ): $mol_view
		Hero_title_em( ): $mol_view
		Hero_title_suffix( ): $mol_view
		Hero_title( ): $mol_view
		Hero_sub( ): $mol_view
		Hero_commission_icon( ): $mol_view
		Hero_commission_value( ): $mol_view
		Hero_commission_text( ): $mol_view
		Hero_commission( ): $mol_view
		catalog_link( ): string
		Hero_action_primary( ): $bog_brl_btn_primary
		telegram_url( ): string
		Hero_action_telegram( ): $bog_brl_btn_telegram
		Hero_actions( ): $mol_view
		Hero_content( ): $mol_view
		stat_number( id: any): string
		stat_label( id: any): string
		Stat( id: any): $bog_brl_stat
		stats_rows( ): readonly($mol_view)[]
		Stats( ): $mol_view
		Hero_container( ): $bog_brl_container
		Hero( ): $mol_view
		How_title( ): $mol_view
		How_text( ): $mol_view
		How_header( ): $mol_view
		step_num( id: any): string
		step_icon( id: any): string
		step_title( id: any): string
		step_text( id: any): string
		Step( id: any): $bog_brl_step
		steps_rows( ): readonly($mol_view)[]
		Steps( ): $mol_view
		How_container( ): $bog_brl_container
		How( ): $mol_view
		Advantages_title( ): $mol_view
		Advantages_text( ): $mol_view
		Advantages_header( ): $mol_view
		adv_icon( id: any): string
		adv_theme( id: any): string
		adv_title( id: any): string
		adv_text( id: any): string
		Advantage( id: any): $bog_brl_adv
		advantages_rows( ): readonly($mol_view)[]
		Advantages_grid( ): $mol_view
		Advantages_container( ): $bog_brl_container
		Advantages( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_catalog_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__value_bog_brl_catalog_5 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_type_draft'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_bog_brl_catalog_6 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_type_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_view__sub_bog_brl_catalog_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__value_bog_brl_catalog_9 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_rooms_draft'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_bog_brl_catalog_10 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_rooms_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_view__sub_bog_brl_catalog_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_select__value_bog_brl_catalog_13 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_district_draft'] >
		,
		ReturnType< $mol_select['value'] >
	>
	type $mol_select__dictionary_bog_brl_catalog_14 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_district_dict'] >
		,
		ReturnType< $mol_select['dictionary'] >
	>
	type $mol_view__sub_bog_brl_catalog_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_16 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__value_bog_brl_catalog_17 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_price_min_draft'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_bog_brl_catalog_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_view__sub_bog_brl_catalog_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_string__value_bog_brl_catalog_21 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['filter_price_max_draft'] >
		,
		ReturnType< $mol_string['value'] >
	>
	type $mol_string__hint_bog_brl_catalog_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_string['hint'] >
	>
	type $mol_view__sub_bog_brl_catalog_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button__click_bog_brl_catalog_24 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['apply_filters'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_bog_brl_catalog_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_button__click_bog_brl_catalog_26 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['reset_filters'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_bog_brl_catalog_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_28 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_catalog_30 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['results_count_value'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_catalog_31 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['results_count_word'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_catalog_32 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_property_card__uri_bog_brl_catalog_33 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_link'] >
		,
		ReturnType< $bog_brl_property_card['uri'] >
	>
	type $bog_brl_property_card__image_bog_brl_catalog_34 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_image'] >
		,
		ReturnType< $bog_brl_property_card['image'] >
	>
	type $bog_brl_property_card__badge_bog_brl_catalog_35 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_badge'] >
		,
		ReturnType< $bog_brl_property_card['badge'] >
	>
	type $bog_brl_property_card__badge_house_bog_brl_catalog_36 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_badge_house'] >
		,
		ReturnType< $bog_brl_property_card['badge_house'] >
	>
	type $bog_brl_property_card__price_bog_brl_catalog_37 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_price'] >
		,
		ReturnType< $bog_brl_property_card['price'] >
	>
	type $bog_brl_property_card__address_bog_brl_catalog_38 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_address'] >
		,
		ReturnType< $bog_brl_property_card['address'] >
	>
	type $bog_brl_property_card__meta_rooms_bog_brl_catalog_39 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_meta_rooms'] >
		,
		ReturnType< $bog_brl_property_card['meta_rooms'] >
	>
	type $bog_brl_property_card__meta_area_bog_brl_catalog_40 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_meta_area'] >
		,
		ReturnType< $bog_brl_property_card['meta_area'] >
	>
	type $bog_brl_property_card__meta_floor_bog_brl_catalog_41 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_meta_floor'] >
		,
		ReturnType< $bog_brl_property_card['meta_floor'] >
	>
	type $mol_view__sub_bog_brl_catalog_42 = $mol_type_enforce<
		ReturnType< $bog_brl_catalog['property_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_catalog_43 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_catalog_44 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_catalog extends $mol_view {
		Section_title( ): $mol_view
		Section_text( ): $mol_view
		Section_header( ): $mol_view
		Filter_type_label( ): $mol_view
		filter_type_draft( next?: string ): string
		filter_type_dict( ): Record<string, any>
		Filter_type_select( ): $mol_select
		Filter_type( ): $mol_view
		Filter_rooms_label( ): $mol_view
		filter_rooms_draft( next?: string ): string
		filter_rooms_dict( ): Record<string, any>
		Filter_rooms_select( ): $mol_select
		Filter_rooms( ): $mol_view
		Filter_district_label( ): $mol_view
		filter_district_draft( next?: string ): string
		filter_district_dict( ): Record<string, any>
		Filter_district_select( ): $mol_select
		Filter_district( ): $mol_view
		Filter_price_min_label( ): $mol_view
		filter_price_min_draft( next?: string ): string
		Filter_price_min_input( ): $mol_string
		Filter_price_min( ): $mol_view
		Filter_price_max_label( ): $mol_view
		filter_price_max_draft( next?: string ): string
		Filter_price_max_input( ): $mol_string
		Filter_price_max( ): $mol_view
		apply_filters( next?: any ): any
		Filter_apply( ): $mol_button
		reset_filters( next?: any ): any
		Filter_reset( ): $mol_button
		Filters( ): $mol_view
		Results_text( ): $mol_view
		results_count_value( ): string
		Results_value( ): $mol_text
		results_count_word( ): string
		Results_word( ): $mol_text
		Results_count( ): $mol_view
		property_link( id: any): string
		property_image( id: any): string
		property_badge( id: any): string
		property_badge_house( id: any): boolean
		property_price( id: any): string
		property_address( id: any): string
		property_meta_rooms( id: any): string
		property_meta_area( id: any): string
		property_meta_floor( id: any): string
		Property_card( id: any): $bog_brl_property_card
		property_rows( ): readonly($mol_view)[]
		Properties_grid( ): $mol_view
		Container( ): $bog_brl_container
		Catalog_section( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_link__uri_bog_brl_property_1 = $mol_type_enforce<
		ReturnType< $bog_brl_property['catalog_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_bog_brl_property_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_image__uri_bog_brl_property_3 = $mol_type_enforce<
		ReturnType< $bog_brl_property['current_image'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_button__click_bog_brl_property_4 = $mol_type_enforce<
		ReturnType< $bog_brl_property['prev_image'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_bog_brl_property_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_button__click_bog_brl_property_6 = $mol_type_enforce<
		ReturnType< $bog_brl_property['next_image'] >
		,
		ReturnType< $mol_button['click'] >
	>
	type $mol_button__sub_bog_brl_property_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button['sub'] >
	>
	type $mol_view__sub_bog_brl_property_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_gallery_dot__active_bog_brl_property_9 = $mol_type_enforce<
		ReturnType< $bog_brl_property['dot_active'] >
		,
		ReturnType< $bog_brl_gallery_dot['active'] >
	>
	type $bog_brl_gallery_dot__click_bog_brl_property_10 = $mol_type_enforce<
		ReturnType< $bog_brl_property['dot_select'] >
		,
		ReturnType< $bog_brl_gallery_dot['click'] >
	>
	type $mol_view__sub_bog_brl_property_11 = $mol_type_enforce<
		ReturnType< $bog_brl_property['dot_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_property_13 = $mol_type_enforce<
		ReturnType< $bog_brl_property['property_title'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__text_bog_brl_property_14 = $mol_type_enforce<
		ReturnType< $bog_brl_property['property_description'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_property_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_feature__text_bog_brl_property_16 = $mol_type_enforce<
		ReturnType< $bog_brl_property['feature_text'] >
		,
		ReturnType< $bog_brl_feature['text'] >
	>
	type $mol_view__sub_bog_brl_property_17 = $mol_type_enforce<
		ReturnType< $bog_brl_property['feature_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_property_20 = $mol_type_enforce<
		ReturnType< $bog_brl_property['sidebar_price_value'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__sub_bog_brl_property_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text__text_bog_brl_property_23 = $mol_type_enforce<
		ReturnType< $bog_brl_property['sidebar_type'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_view__attr_bog_brl_property_24 = $mol_type_enforce<
		({ 
			'bog_brl_sidebar_type_house': ReturnType< $bog_brl_property['sidebar_type_house'] >,
		}) 
		,
		ReturnType< $mol_view['attr'] >
	>
	type $mol_view__sub_bog_brl_property_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_spec__label_bog_brl_property_26 = $mol_type_enforce<
		ReturnType< $bog_brl_property['spec_label'] >
		,
		ReturnType< $bog_brl_spec['label'] >
	>
	type $bog_brl_spec__value_bog_brl_property_27 = $mol_type_enforce<
		ReturnType< $bog_brl_property['spec_value'] >
		,
		ReturnType< $bog_brl_spec['value'] >
	>
	type $mol_view__sub_bog_brl_property_28 = $mol_type_enforce<
		ReturnType< $bog_brl_property['spec_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_29 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_deal_row__label_bog_brl_property_30 = $mol_type_enforce<
		ReturnType< $bog_brl_property['deal_label'] >
		,
		ReturnType< $bog_brl_deal_row['label'] >
	>
	type $bog_brl_deal_row__value_bog_brl_property_31 = $mol_type_enforce<
		ReturnType< $bog_brl_property['deal_value'] >
		,
		ReturnType< $bog_brl_deal_row['value'] >
	>
	type $mol_view__sub_bog_brl_property_32 = $mol_type_enforce<
		ReturnType< $bog_brl_property['deal_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_btn_telegram__label_bog_brl_property_34 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_btn_telegram['label'] >
	>
	type $bog_brl_btn_telegram__uri_bog_brl_property_35 = $mol_type_enforce<
		ReturnType< $bog_brl_property['telegram_url'] >
		,
		ReturnType< $bog_brl_btn_telegram['uri'] >
	>
	type $bog_brl_btn_phone__label_bog_brl_property_36 = $mol_type_enforce<
		ReturnType< $bog_brl_property['phone_label'] >
		,
		ReturnType< $bog_brl_btn_phone['label'] >
	>
	type $bog_brl_btn_phone__uri_bog_brl_property_37 = $mol_type_enforce<
		ReturnType< $bog_brl_property['phone_url'] >
		,
		ReturnType< $bog_brl_btn_phone['uri'] >
	>
	type $mol_view__sub_bog_brl_property_38 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_property_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_property_41 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_property_42 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_property extends $mol_view {
		catalog_link( ): string
		Back_link( ): $mol_link
		current_image( ): string
		Gallery_image( ): $mol_image
		prev_image( next?: any ): any
		Gallery_prev( ): $mol_button
		next_image( next?: any ): any
		Gallery_next( ): $mol_button
		Gallery_arrows( ): $mol_view
		dot_active( id: any): boolean
		dot_select( id: any, next?: any ): any
		Gallery_dot( id: any): $bog_brl_gallery_dot
		dot_rows( ): readonly($mol_view)[]
		Gallery_nav( ): $mol_view
		Gallery( ): $mol_view
		property_title( ): string
		Property_title( ): $mol_text
		property_description( ): string
		Property_desc( ): $mol_text
		Property_features_title( ): $mol_view
		feature_text( id: any): string
		Feature( id: any): $bog_brl_feature
		feature_rows( ): readonly($mol_view)[]
		Property_features( ): $mol_view
		Property_info( ): $mol_view
		Property_main( ): $mol_view
		sidebar_price_value( ): string
		Sidebar_price_value( ): $mol_text
		Sidebar_price_unit( ): $mol_view
		Sidebar_price( ): $mol_view
		sidebar_type_house( ): boolean
		sidebar_type( ): string
		Sidebar_type_text( ): $mol_text
		Sidebar_type( ): $mol_view
		spec_label( id: any): string
		spec_value( id: any): string
		Spec( id: any): $bog_brl_spec
		spec_rows( ): readonly($mol_view)[]
		Sidebar_specs( ): $mol_view
		Deal_title( ): $mol_view
		deal_label( id: any): string
		deal_value( id: any): string
		Deal_row( id: any): $bog_brl_deal_row
		deal_rows( ): readonly($mol_view)[]
		Deal_rows( ): $mol_view
		Deal_terms( ): $mol_view
		telegram_url( ): string
		Sidebar_telegram( ): $bog_brl_btn_telegram
		phone_label( ): string
		phone_url( ): string
		Sidebar_phone( ): $bog_brl_btn_phone
		Sidebar_contacts( ): $mol_view
		Property_sidebar( ): $mol_view
		Property_grid( ): $mol_view
		Container( ): $bog_brl_container
		Property_section( ): $mol_view
		property_id( next?: any ): any
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_landlords_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_landlords_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_8 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_landlord_benefit__icon_bog_brl_landlords_9 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['landlord_benefit_icon'] >
		,
		ReturnType< $bog_brl_landlord_benefit['icon'] >
	>
	type $bog_brl_landlord_benefit__title_bog_brl_landlords_10 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['landlord_benefit_title'] >
		,
		ReturnType< $bog_brl_landlord_benefit['title'] >
	>
	type $bog_brl_landlord_benefit__text_bog_brl_landlords_11 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['landlord_benefit_text'] >
		,
		ReturnType< $bog_brl_landlord_benefit['text'] >
	>
	type $mol_view__sub_bog_brl_landlords_12 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['landlord_benefit_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_btn_telegram__label_bog_brl_landlords_15 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_btn_telegram['label'] >
	>
	type $bog_brl_btn_telegram__uri_bog_brl_landlords_16 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['telegram_url'] >
		,
		ReturnType< $bog_brl_btn_telegram['uri'] >
	>
	type $bog_brl_btn_phone__label_bog_brl_landlords_17 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['phone_label'] >
		,
		ReturnType< $bog_brl_btn_phone['label'] >
	>
	type $bog_brl_btn_phone__uri_bog_brl_landlords_18 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['phone_url'] >
		,
		ReturnType< $bog_brl_btn_phone['uri'] >
	>
	type $mol_view__sub_bog_brl_landlords_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_commission_item__text_bog_brl_landlords_23 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['commission_text'] >
		,
		ReturnType< $bog_brl_commission_item['text'] >
	>
	type $mol_view__sub_bog_brl_landlords_24 = $mol_type_enforce<
		ReturnType< $bog_brl_landlords['commission_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_landlords_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_landlords_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_landlords extends $mol_view {
		Landlord_badge_dot( ): $mol_view
		Landlord_badge_text( ): $mol_view
		Landlord_badge( ): $mol_view
		Landlord_title_prefix( ): $mol_view
		Landlord_title_em( ): $mol_view
		Landlord_title( ): $mol_view
		Landlord_sub( ): $mol_view
		Landlord_hero_container( ): $bog_brl_container
		Landlord_hero( ): $mol_view
		landlord_benefit_icon( id: any): string
		landlord_benefit_title( id: any): string
		landlord_benefit_text( id: any): string
		Benefit( id: any): $bog_brl_landlord_benefit
		landlord_benefit_rows( ): readonly($mol_view)[]
		Landlord_benefits( ): $mol_view
		Landlord_cta_title( ): $mol_view
		Landlord_cta_text( ): $mol_view
		telegram_url( ): string
		Landlord_cta_telegram( ): $bog_brl_btn_telegram
		phone_label( ): string
		phone_url( ): string
		Landlord_cta_phone( ): $bog_brl_btn_phone
		Landlord_cta_contacts( ): $mol_view
		Landlord_cta( ): $mol_view
		Landlord_grid( ): $mol_view
		Commission_title( ): $mol_view
		commission_text( id: any): string
		Commission_item( id: any): $bog_brl_commission_item
		commission_rows( ): readonly($mol_view)[]
		Commission_list( ): $mol_view
		Commission_explainer( ): $mol_view
		Landlord_section_container( ): $bog_brl_container
		Landlord_section( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_about_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_about_value__icon_bog_brl_about_8 = $mol_type_enforce<
		ReturnType< $bog_brl_about['about_value_icon'] >
		,
		ReturnType< $bog_brl_about_value['icon'] >
	>
	type $bog_brl_about_value__title_bog_brl_about_9 = $mol_type_enforce<
		ReturnType< $bog_brl_about['about_value_title'] >
		,
		ReturnType< $bog_brl_about_value['title'] >
	>
	type $bog_brl_about_value__text_bog_brl_about_10 = $mol_type_enforce<
		ReturnType< $bog_brl_about['about_value_text'] >
		,
		ReturnType< $bog_brl_about_value['text'] >
	>
	type $mol_view__sub_bog_brl_about_11 = $mol_type_enforce<
		ReturnType< $bog_brl_about['about_value_rows'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_about_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_about_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_about_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_about extends $mol_view {
		About_visual_title( ): $mol_view
		About_visual_text( ): $mol_view
		About_visual( ): $mol_view
		About_title( ): $mol_view
		About_paragraph_1( ): $mol_view
		About_paragraph_2( ): $mol_view
		About_paragraph_3( ): $mol_view
		about_value_icon( id: any): string
		about_value_title( id: any): string
		about_value_text( id: any): string
		About_value( id: any): $bog_brl_about_value
		about_value_rows( ): readonly($mol_view)[]
		About_values( ): $mol_view
		About_text( ): $mol_view
		About_grid( ): $mol_view
		Container( ): $bog_brl_container
		About_section( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_contacts_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_contacts_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_contacts_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_contact_card__icon_bog_brl_contacts_4 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['icon'] >
	>
	type $bog_brl_contact_card__theme_bog_brl_contacts_5 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['theme'] >
	>
	type $bog_brl_contact_card__title_bog_brl_contacts_6 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['title'] >
	>
	type $bog_brl_contact_card__text_bog_brl_contacts_7 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['text'] >
	>
	type $bog_brl_contact_card__link_label_bog_brl_contacts_8 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['link_label'] >
	>
	type $bog_brl_contact_card__link_uri_bog_brl_contacts_9 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['link_uri'] >
	>
	type $bog_brl_contact_card__icon_bog_brl_contacts_10 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['icon'] >
	>
	type $bog_brl_contact_card__theme_bog_brl_contacts_11 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['theme'] >
	>
	type $bog_brl_contact_card__title_bog_brl_contacts_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['title'] >
	>
	type $bog_brl_contact_card__text_bog_brl_contacts_13 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['text'] >
	>
	type $bog_brl_contact_card__link_label_bog_brl_contacts_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['link_label'] >
	>
	type $bog_brl_contact_card__link_uri_bog_brl_contacts_15 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['link_uri'] >
	>
	type $bog_brl_contact_card__icon_bog_brl_contacts_16 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['icon'] >
	>
	type $bog_brl_contact_card__theme_bog_brl_contacts_17 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['theme'] >
	>
	type $bog_brl_contact_card__title_bog_brl_contacts_18 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['title'] >
	>
	type $bog_brl_contact_card__text_bog_brl_contacts_19 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['text'] >
	>
	type $bog_brl_contact_card__note_bog_brl_contacts_20 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_contact_card['note'] >
	>
	type $mol_view__sub_bog_brl_contacts_21 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_contacts_22 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	type $mol_view__sub_bog_brl_contacts_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_brl_contacts extends $mol_view {
		Section_title( ): $mol_view
		Section_text( ): $mol_view
		Section_header( ): $mol_view
		Contact_tg( ): $bog_brl_contact_card
		Contact_phone( ): $bog_brl_contact_card
		Contact_addr( ): $bog_brl_contact_card
		Contacts_grid( ): $mol_view
		Container( ): $bog_brl_container
		Contacts_section( ): $mol_view
		sub( ): readonly(any)[]
	}
	
	type $mol_view__sub_bog_brl_footer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_link__uri_bog_brl_footer_3 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['home_link'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_bog_brl_footer_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_7 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_8 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_9 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['home_link'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_10 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_11 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['catalog_link'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_12 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_13 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['landlords_link'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_14 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_15 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['about_link'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_16 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_17 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['contacts_link'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $mol_view__sub_bog_brl_footer_18 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_19 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_21 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_22 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['telegram_url'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_23 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_24 = $mol_type_enforce<
		ReturnType< $bog_brl_footer['phone_url'] >
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $mol_view__sub_bog_brl_footer_25 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_28 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_29 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_30 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_31 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $bog_brl_footer_link__label_bog_brl_footer_32 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['label'] >
	>
	type $bog_brl_footer_link__uri_bog_brl_footer_33 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_brl_footer_link['uri'] >
	>
	type $mol_view__sub_bog_brl_footer_34 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_35 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_36 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_37 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_38 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_brl_footer_39 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $bog_brl_container__sub_bog_brl_footer_40 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_brl_container['sub'] >
	>
	export class $bog_brl_footer extends $mol_view {
		home_link( ): string
		Footer_logo_mark( ): $mol_view
		Footer_logo_text( ): $mol_view
		Footer_logo( ): $mol_link
		Footer_brand_text( ): $mol_view
		Footer_brand( ): $mol_view
		Footer_nav_title( ): $mol_view
		Footer_link_home( ): $bog_brl_footer_link
		catalog_link( ): string
		Footer_link_catalog( ): $bog_brl_footer_link
		landlords_link( ): string
		Footer_link_landlords( ): $bog_brl_footer_link
		about_link( ): string
		Footer_link_about( ): $bog_brl_footer_link
		contacts_link( ): string
		Footer_link_contacts( ): $bog_brl_footer_link
		Footer_nav_links( ): $mol_view
		Footer_nav( ): $mol_view
		Footer_contacts_title( ): $mol_view
		telegram_url( ): string
		Footer_tg( ): $bog_brl_footer_link
		phone_url( ): string
		Footer_phone( ): $bog_brl_footer_link
		Footer_contacts_links( ): $mol_view
		Footer_contacts( ): $mol_view
		Footer_info_title( ): $mol_view
		Footer_info_contract( ): $bog_brl_footer_link
		Footer_info_faq( ): $bog_brl_footer_link
		Footer_info_privacy( ): $bog_brl_footer_link
		Footer_info_links( ): $mol_view
		Footer_info( ): $mol_view
		Footer_grid( ): $mol_view
		Footer_copy( ): $mol_view
		Footer_location( ): $mol_view
		Footer_bottom( ): $mol_view
		Container( ): $bog_brl_container
		page( next?: string ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=brl.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map
