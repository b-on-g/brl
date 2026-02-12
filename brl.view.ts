namespace $.$$ {
	type PageId = 'home' | 'catalog' | 'property' | 'landlords' | 'about' | 'contacts'
	const PAGE_IDS: PageId[] = ['home', 'catalog', 'property', 'landlords', 'about', 'contacts']

	const CONTACTS = {
		telegram: { handle: '@yusdanil', url: 'https://t.me/yusdanil' },
		phone: { display: '+7 999 132-31-41', url: 'tel:+79991323141' },
	} as const

	const HOME_STATS = [
		{ number: '20%', label: 'Фиксированная комиссия' },
		{ number: '150+', label: 'Объектов в базе' },
		{ number: '800+', label: 'Успешных сделок' },
		{ number: '1 день', label: 'Среднее время подбора' },
	] as const

	const HOME_STEPS = [
		{ num: '01', icon: '🔍', title: 'Анализ объекта', text: 'Проверяем документы, собственника, состояние жилья' },
		{ num: '02', icon: '📸', title: 'Подготовка', text: 'Реальные фото, описание, размещение в каталоге' },
		{ num: '03', icon: '👥', title: 'Отбор арендаторов', text: 'Фильтрация по платёжеспособности и документам' },
		{ num: '04', icon: '📋', title: 'Договор', text: 'Подписываем договор до передачи денег' },
		{ num: '05', icon: '🔑', title: 'Передача ключей', text: 'Фиксируем состояние, передаём ключи' },
	] as const

	const HOME_ADVANTAGES = [
		{
			icon: '💰',
			theme: 'warm',
			title: 'Комиссия 20% — и точка',
			text: 'Фиксированная ставка без скрытых платежей. У большинства агентств — от 50% до 100%.',
		},
		{
			icon: '🛡️',
			theme: 'green',
			title: 'Проверенные объекты',
			text: 'Документы собственника, реальные фото, актуальная цена. Никаких фейков и субаренд.',
		},
		{
			icon: '📋',
			theme: 'muted',
			title: 'Договор до денег',
			text: 'Сначала подписываем договор — потом передаём деньги. Защита для обеих сторон.',
		},
		{
			icon: '🏠',
			theme: 'green',
			title: 'Квартиры и дома',
			text: 'В каталоге не только квартиры — есть частные дома для долгосрочной аренды.',
		},
		{
			icon: '⚡',
			theme: 'warm',
			title: 'Быстрая связь',
			text: 'Никаких форм. Пишете в Telegram или звоните — отвечаем в течение часа.',
		},
		{
			icon: '🤝',
			theme: 'muted',
			title: 'Баланс интересов',
			text: 'Мы посредник, который держит баланс и отвечает за процесс — не за одну сторону.',
		},
	] as const

	const LANDLORD_BENEFITS = [
		{
			icon: '💰',
			title: 'Фиксированная комиссия 20%',
			text: 'Ровно 20% от месячной аренды — за полный цикл работы. Самая низкая ставка на рынке Казани.',
		},
		{
			icon: '👥',
			title: 'Проверка арендаторов',
			text: 'Отбираем жильцов по платёжеспособности, целям аренды и документам. Вы утверждаете финального кандидата.',
		},
		{
			icon: '📋',
			title: 'Договор и юридическая защита',
			text: 'Составляем типовой договор, фиксируем состояние квартиры. Всё прозрачно и законно.',
		},
		{
			icon: '⏱️',
			title: 'Экономия вашего времени',
			text: 'Фотосъёмка, размещение, показы и переговоры — на нас. Вам нужно только утвердить арендатора.',
		},
		{
			icon: '🔍',
			title: 'Минимум вовлечённости',
			text: 'Показы с вашим участием или без. Держим в курсе через Telegram на каждом шаге.',
		},
	] as const

	const COMMISSION_ITEMS = [
		'Профессиональная фотосъёмка и описание объекта',
		'Размещение в каталоге и продвижение',
		'Приём и фильтрация обращений арендаторов',
		'Организация и проведение показов',
		'Проверка платёжеспособности и документов',
		'Составление договора аренды',
		'Акт приёма-передачи с фиксацией состояния',
		'Сопровождение сделки до передачи ключей',
	] as const

	const ABOUT_VALUES = [
		{ icon: '🔍', title: 'Проверка каждого объекта', text: 'Документы, собственник, фото, цена — всё реальное' },
		{ icon: '📋', title: 'Договор до денег', text: 'Сначала подпись — потом оплата. Никак иначе' },
		{ icon: '⚖️', title: 'Баланс интересов', text: 'Защищаем и арендатора, и собственника одинаково' },
	] as const

	type PropertyType = 'apartment' | 'house'
	type Property = {
		id: number
		propertyType: PropertyType
		rooms: number
		area: number
		floor: number
		totalFloors: number
		price: number
		deposit: string
		district: string
		address: string
		title: string
		description: string
		images: string[]
		features: string[]
	}

	const PROPERTIES: Property[] = [
		{
			id: 1,
			propertyType: 'apartment',
			rooms: 1,
			area: 38,
			floor: 5,
			totalFloors: 16,
			price: 22000,
			deposit: '1 месяц',
			district: 'Ново-Савиновский',
			address: 'ул. Амирхана, 17',
			title: '1-комнатная, ул. Амирхана',
			description:
				'Светлая квартира с отличным ремонтом рядом с парком Победы. Полностью меблирована: кухня со встроенной техникой, двуспальная кровать, рабочий стол. Метро «Козья Слобода» в пешей доступности.',
			images: [
				'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Стиральная машина', 'Кондиционер', 'Балкон', 'Парковка', 'Метро 7 мин'],
		},
		{
			id: 2,
			propertyType: 'apartment',
			rooms: 2,
			area: 56,
			floor: 8,
			totalFloors: 22,
			price: 35000,
			deposit: '1 месяц',
			district: 'Вахитовский',
			address: 'ул. Пушкина, 32',
			title: '2-комнатная, центр',
			description:
				'Просторная двушка в 5 минутах от Кремля. Панорамные окна, дизайнерский ремонт, два санузла. Полностью оборудованная кухня, Smart TV.',
			images: [
				'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Посудомоечная машина', 'Smart TV', '2 санузла', 'Центр города', 'Лифт'],
		},
		{
			id: 3,
			propertyType: 'apartment',
			rooms: 3,
			area: 78,
			floor: 3,
			totalFloors: 10,
			price: 45000,
			deposit: '1 месяц',
			district: 'Советский',
			address: 'ул. Мусина, 68',
			title: '3-комнатная, ул. Мусина',
			description:
				'Семейная квартира с отдельными комнатами, просторной кухней-гостиной и двумя балконами. Рядом школа, детсад, парк. Тихий район.',
			images: [
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Стиральная машина', 'Посудомойка', '2 балкона', 'Кладовая', 'Школа рядом'],
		},
		{
			id: 4,
			propertyType: 'apartment',
			rooms: 2,
			area: 52,
			floor: 15,
			totalFloors: 20,
			price: 28000,
			deposit: '1 месяц',
			district: 'Приволжский',
			address: 'ул. Гарифьянова, 25',
			title: '2-комнатная, Горки',
			description:
				'Современная квартира в ЖК «Горки Парк» с видом на Казанку. Евроремонт 2023, новая мебель и техника. Подземная парковка включена.',
			images: [
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Подземная парковка', 'Кондиционер', 'Вид на реку', 'Новая мебель', 'ТЦ «Мега» рядом'],
		},
		{
			id: 5,
			propertyType: 'apartment',
			rooms: 1,
			area: 40,
			floor: 6,
			totalFloors: 9,
			price: 18000,
			deposit: '1 месяц',
			district: 'Авиастроительный',
			address: 'ул. Копылова, 14',
			title: '1-комнатная, ул. Копылова',
			description:
				'Бюджетный вариант в спокойном районе. Косметический ремонт, вся мебель и техника. Рядом транспорт и магазины.',
			images: [
				'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Стиральная машина', 'Новый ламинат', 'Магазины рядом', 'Трамвай 3 мин', 'Тихий двор'],
		},
		{
			id: 6,
			propertyType: 'apartment',
			rooms: 4,
			area: 95,
			floor: 4,
			totalFloors: 12,
			price: 65000,
			deposit: '2 месяца',
			district: 'Вахитовский',
			address: 'ул. Островского, 7',
			title: '4-комнатная, центр, премиум',
			description:
				'Элитная квартира с авторским ремонтом. Итальянская мебель, техника Miele. Четыре комнаты, гардеробная, два санузла с тёплым полом. Консьерж, паркинг.',
			images: [
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Консьерж', 'Тёплый пол', 'Гардеробная', 'Паркинг', 'Техника Miele'],
		},
		{
			id: 7,
			propertyType: 'house',
			rooms: 3,
			area: 120,
			floor: 1,
			totalFloors: 2,
			price: 55000,
			deposit: '2 месяца',
			district: 'Приволжский',
			address: 'пос. Константиновка, ул. Озёрная, 14',
			title: 'Дом 120 м², Константиновка',
			description:
				'Двухэтажный кирпичный дом. Первый этаж: кухня-гостиная 30 м², санузел. Второй: три спальни, ванная. Участок 6 соток, баня, парковка на 2 машины. Газ, центральная вода.',
			images: [
				'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
			],
			features: [
				'Участок 6 соток',
				'Баня',
				'Газовое отопление',
				'Парковка 2 авто',
				'Центральная вода',
				'Тихий район',
			],
		},
		{
			id: 8,
			propertyType: 'house',
			rooms: 4,
			area: 180,
			floor: 1,
			totalFloors: 2,
			price: 85000,
			deposit: '2 месяца',
			district: 'Советский',
			address: 'пос. Вознесенское, ул. Дачная, 22',
			title: 'Дом 180 м², Вознесенское',
			description:
				'Просторный дом для большой семьи. Четыре спальни, два санузла, кабинет. Большая кухня-столовая с террасой. Участок 10 соток, гараж, детская площадка. Охраняемый посёлок.',
			images: [
				'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop',
			],
			features: [
				'Участок 10 соток',
				'Гараж на 2 авто',
				'Терраса',
				'Охрана посёлка',
				'Детская площадка',
				'Кабинет',
			],
		},
		{
			id: 9,
			propertyType: 'apartment',
			rooms: 1,
			area: 34,
			floor: 12,
			totalFloors: 25,
			price: 25000,
			deposit: '1 месяц',
			district: 'Ново-Савиновский',
			address: 'пр. Ямашева, 103',
			title: '1-комнатная, пр. Ямашева',
			description:
				'Хороший ремонт в новом доме. Компактная функциональная планировка. Высокий этаж с видом на город. Метро в 10 минутах.',
			images: [
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop',
				'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop',
			],
			features: ['Wi-Fi', 'Стиральная машина', 'Вид на город', 'Метро 10 мин', 'Лифт', 'Консьерж'],
		},
	]

	function format_price(value: number) {
		return value.toLocaleString('ru-RU')
	}

	function result_word(count: number) {
		if (count % 10 === 1 && count % 100 !== 11) return 'объект'
		if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'объекта'
		return 'объектов'
	}

	function make_page_link(owner: { $: any }, page: PageId | null, property?: number | null) {
		return owner.$.$mol_state_arg.link({
			page: page && page !== 'home' ? page : null,
			property: property == null ? null : String(property),
		})
	}

	export class $bog_brl extends $.$bog_brl {
		@$mol_mem
		page(next?: PageId) {
			const normalized = next === 'home' ? null : next
			if (next !== undefined && next !== 'property') this.$.$mol_state_arg.value('property', null)
			return (this.$.$mol_state_arg.value('page', normalized) as PageId | null) ?? 'home'
		}

		@$mol_mem
		property_id(next?: number | null) {
			const raw = this.$.$mol_state_arg.value('property', next == null ? null : String(next))
			const value = raw ? Number(raw) : null
			return Number.isFinite(value) ? value : null
		}

		@$mol_mem
		mobile_open(next?: boolean) {
			return next ?? false
		}

		@$mol_mem
		page_index() {
			const page = this.page()
			const index = PAGE_IDS.indexOf(page)
			return String(index >= 0 ? index : 0)
		}
	}

	export class $bog_brl_header extends $.$bog_brl_header {
		home_link() {
			return make_page_link(this, 'home')
		}

		catalog_link() {
			return make_page_link(this, 'catalog')
		}

		landlords_link() {
			return make_page_link(this, 'landlords')
		}

		about_link() {
			return make_page_link(this, 'about')
		}

		contacts_link() {
			return make_page_link(this, 'contacts')
		}

		telegram_url() {
			return CONTACTS.telegram.url
		}

		@$mol_action
		burger_toggle() {
			this.mobile_open(!this.mobile_open())
		}
	}

	export class $bog_brl_mobile_nav extends $.$bog_brl_mobile_nav {
		telegram_url() {
			return CONTACTS.telegram.url
		}

		@$mol_action
		mobile_home_click() {
			this.page('home')
			this.mobile_open(false)
		}

		@$mol_action
		mobile_catalog_click() {
			this.page('catalog')
			this.mobile_open(false)
		}

		@$mol_action
		mobile_landlords_click() {
			this.page('landlords')
			this.mobile_open(false)
		}

		@$mol_action
		mobile_about_click() {
			this.page('about')
			this.mobile_open(false)
		}

		@$mol_action
		mobile_contacts_click() {
			this.page('contacts')
			this.mobile_open(false)
		}
	}

	export class $bog_brl_home extends $.$bog_brl_home {
		catalog_link() {
			return make_page_link(this, 'catalog')
		}

		telegram_url() {
			return CONTACTS.telegram.url
		}

		@$mol_mem
		stats_rows() {
			return HOME_STATS.map((_, index) => this.Stat(index))
		}

		@$mol_mem_key
		stat_number(index: number) {
			return HOME_STATS[index]?.number ?? ''
		}

		@$mol_mem_key
		stat_label(index: number) {
			return HOME_STATS[index]?.label ?? ''
		}

		@$mol_mem
		steps_rows() {
			return HOME_STEPS.map((_, index) => this.Step(index))
		}

		@$mol_mem_key
		step_num(index: number) {
			return HOME_STEPS[index]?.num ?? ''
		}

		@$mol_mem_key
		step_icon(index: number) {
			return HOME_STEPS[index]?.icon ?? ''
		}

		@$mol_mem_key
		step_title(index: number) {
			return HOME_STEPS[index]?.title ?? ''
		}

		@$mol_mem_key
		step_text(index: number) {
			return HOME_STEPS[index]?.text ?? ''
		}

		@$mol_mem
		advantages_rows() {
			return HOME_ADVANTAGES.map((_, index) => this.Advantage(index))
		}

		@$mol_mem_key
		adv_icon(index: number) {
			return HOME_ADVANTAGES[index]?.icon ?? ''
		}

		@$mol_mem_key
		adv_theme(index: number) {
			return HOME_ADVANTAGES[index]?.theme ?? 'muted'
		}

		@$mol_mem_key
		adv_title(index: number) {
			return HOME_ADVANTAGES[index]?.title ?? ''
		}

		@$mol_mem_key
		adv_text(index: number) {
			return HOME_ADVANTAGES[index]?.text ?? ''
		}
	}

	export class $bog_brl_catalog extends $.$bog_brl_catalog {
		@$mol_mem
		filter_type_draft(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_rooms_draft(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_district_draft(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_price_min_draft(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_price_max_draft(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_type(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_rooms(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_district(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_price_min(next?: string) {
			return next ?? ''
		}

		@$mol_mem
		filter_price_max(next?: string) {
			return next ?? ''
		}

		filter_type_dict() {
			return {
				'': 'Все объекты',
				apartment: 'Квартиры',
				house: 'Дома',
			}
		}

		filter_rooms_dict() {
			return {
				'': 'Все',
				r1: '1 комната',
				r2: '2 комнаты',
				r3: '3 комнаты',
				r4: '4+ комнат',
			}
		}

		filter_district_dict() {
			const dict: Record<string, string> = { '': 'Все районы' }
			const districts = Array.from(new Set(PROPERTIES.map(property => property.district))).sort()
			for (const district of districts) dict[district] = district
			return dict
		}

		@$mol_action
		apply_filters() {
			this.filter_type(this.filter_type_draft())
			this.filter_rooms(this.filter_rooms_draft())
			this.filter_district(this.filter_district_draft())
			this.filter_price_min(this.filter_price_min_draft())
			this.filter_price_max(this.filter_price_max_draft())
		}

		@$mol_action
		reset_filters() {
			this.filter_type_draft('')
			this.filter_rooms_draft('')
			this.filter_district_draft('')
			this.filter_price_min_draft('')
			this.filter_price_max_draft('')
			this.filter_type('')
			this.filter_rooms('')
			this.filter_district('')
			this.filter_price_min('')
			this.filter_price_max('')
		}

		@$mol_mem
		filtered_properties() {
			const type = this.filter_type()
			const rooms = this.filter_rooms()
			const district = this.filter_district()
			const price_min = parseInt(this.filter_price_min())
			const price_max = parseInt(this.filter_price_max())

			return PROPERTIES.filter(property => {
				if (type && property.propertyType !== type) return false
				if (rooms) {
					const room_value = Number(rooms.startsWith('r') ? rooms.slice(1) : rooms)
					if (Number.isFinite(room_value)) {
						if (room_value >= 4) {
							if (property.rooms < 4) return false
						} else if (property.rooms !== room_value) {
							return false
						}
					}
				}
				if (district && property.district !== district) return false
				if (!Number.isNaN(price_min) && property.price < price_min) return false
				if (!Number.isNaN(price_max) && property.price > price_max) return false
				return true
			})
		}

		@$mol_mem
		results_count_value() {
			return String(this.filtered_properties().length)
		}

		@$mol_mem
		results_count_word() {
			return result_word(this.filtered_properties().length)
		}

		@$mol_mem
		property_rows() {
			return this.filtered_properties().map(property => this.Property_card(property.id))
		}

		@$mol_mem_key
		property_data(id: number) {
			return PROPERTIES.find(property => property.id === id)!
		}

		property_link(id: number) {
			return make_page_link(this, 'property', id)
		}

		@$mol_mem_key
		property_image(id: number) {
			return this.property_data(id).images[0] ?? ''
		}

		@$mol_mem_key
		property_badge(id: number) {
			return this.property_data(id).propertyType === 'house' ? 'Дом' : 'Квартира'
		}

		@$mol_mem_key
		property_badge_house(id: number) {
			return this.property_data(id).propertyType === 'house'
		}

		@$mol_mem_key
		property_price(id: number) {
			return `${format_price(this.property_data(id).price)} ₽`
		}

		@$mol_mem_key
		property_address(id: number) {
			const property = this.property_data(id)
			return `${property.district}, ${property.address}`
		}

		@$mol_mem_key
		property_meta_rooms(id: number) {
			return `◻ ${this.property_data(id).rooms}-комн.`
		}

		@$mol_mem_key
		property_meta_area(id: number) {
			return `▭ ${this.property_data(id).area} м²`
		}

		@$mol_mem_key
		property_meta_floor(id: number) {
			const property = this.property_data(id)
			if (property.propertyType === 'house') return `▲ ${property.totalFloors} эт.`
			return `▲ ${property.floor}/${property.totalFloors} эт.`
		}
	}

	export class $bog_brl_property extends $.$bog_brl_property {
		catalog_link() {
			return make_page_link(this, 'catalog')
		}

		telegram_url() {
			return CONTACTS.telegram.url
		}

		phone_url() {
			return CONTACTS.phone.url
		}

		phone_label() {
			return `📞 ${CONTACTS.phone.display}`
		}

		@$mol_mem
		property() {
			const id = this.property_id()
			return PROPERTIES.find(property => property.id === id) ?? PROPERTIES[0]
		}

		@$mol_mem
		images() {
			return this.property().images
		}

		@$mol_mem
		image_index(next?: number) {
			this.property_id()
			return next ?? 0
		}

		@$mol_mem
		current_image() {
			return this.images()[this.image_index()] ?? ''
		}

		@$mol_action
		next_image() {
			const images = this.images()
			if (!images.length) return
			this.image_index((this.image_index() + 1) % images.length)
		}

		@$mol_action
		prev_image() {
			const images = this.images()
			if (!images.length) return
			this.image_index((this.image_index() - 1 + images.length) % images.length)
		}

		@$mol_mem
		dot_rows() {
			return this.images().map((_, index) => this.Gallery_dot(index))
		}

		@$mol_mem_key
		dot_active(index: number) {
			return this.image_index() === index
		}

		@$mol_action
		dot_select(index: number) {
			this.image_index(index)
		}

		property_title() {
			return this.property().title
		}

		property_description() {
			return this.property().description
		}

		@$mol_mem
		feature_rows() {
			return this.property().features.map((_, index) => this.Feature(index))
		}

		@$mol_mem_key
		feature_text(index: number) {
			return this.property().features[index] ?? ''
		}

		sidebar_price_value() {
			return `${format_price(this.property().price)} ₽`
		}

		sidebar_type() {
			return this.property().propertyType === 'house'
				? 'Дом · Долгосрочная аренда'
				: 'Квартира · Долгосрочная аренда'
		}

		sidebar_type_house() {
			return this.property().propertyType === 'house'
		}

		@$mol_mem
		spec_rows() {
			return this.specs().map((_, index) => this.Spec(index))
		}

		@$mol_mem
		specs() {
			const property = this.property()
			return [
				{ label: 'Комнаты', value: String(property.rooms) },
				{ label: 'Площадь', value: `${property.area} м²` },
				{
					label: property.propertyType === 'house' ? 'Этажность' : 'Этаж',
					value:
						property.propertyType === 'house'
							? `${property.totalFloors} эт.`
							: `${property.floor} / ${property.totalFloors}`,
				},
				{ label: 'Район', value: property.district },
			]
		}

		@$mol_mem_key
		spec_label(index: number) {
			return this.specs()[index]?.label ?? ''
		}

		@$mol_mem_key
		spec_value(index: number) {
			return this.specs()[index]?.value ?? ''
		}

		@$mol_mem
		deal_rows() {
			return this.deal_terms().map((_, index) => this.Deal_row(index))
		}

		@$mol_mem
		deal_terms() {
			const property = this.property()
			const commission = Math.round(property.price * 0.2)
			return [
				{ label: 'Комиссия', value: `20% · ${format_price(commission)} ₽` },
				{ label: 'Депозит', value: property.deposit },
				{ label: 'Договор', value: 'До оплаты' },
			]
		}

		@$mol_mem_key
		deal_label(index: number) {
			return this.deal_terms()[index]?.label ?? ''
		}

		@$mol_mem_key
		deal_value(index: number) {
			return this.deal_terms()[index]?.value ?? ''
		}
	}

	export class $bog_brl_landlords extends $.$bog_brl_landlords {
		telegram_url() {
			return CONTACTS.telegram.url
		}

		phone_url() {
			return CONTACTS.phone.url
		}

		phone_label() {
			return `📞 ${CONTACTS.phone.display}`
		}

		@$mol_mem
		landlord_benefit_rows() {
			return LANDLORD_BENEFITS.map((_, index) => this.Benefit(index))
		}

		@$mol_mem_key
		landlord_benefit_icon(index: number) {
			return LANDLORD_BENEFITS[index]?.icon ?? ''
		}

		@$mol_mem_key
		landlord_benefit_title(index: number) {
			return LANDLORD_BENEFITS[index]?.title ?? ''
		}

		@$mol_mem_key
		landlord_benefit_text(index: number) {
			return LANDLORD_BENEFITS[index]?.text ?? ''
		}

		@$mol_mem
		commission_rows() {
			return COMMISSION_ITEMS.map((_, index) => this.Commission_item(index))
		}

		@$mol_mem_key
		commission_text(index: number) {
			return COMMISSION_ITEMS[index] ?? ''
		}
	}

	export class $bog_brl_about extends $.$bog_brl_about {
		@$mol_mem
		about_value_rows() {
			return ABOUT_VALUES.map((_, index) => this.About_value(index))
		}

		@$mol_mem_key
		about_value_icon(index: number) {
			return ABOUT_VALUES[index]?.icon ?? ''
		}

		@$mol_mem_key
		about_value_title(index: number) {
			return ABOUT_VALUES[index]?.title ?? ''
		}

		@$mol_mem_key
		about_value_text(index: number) {
			return ABOUT_VALUES[index]?.text ?? ''
		}
	}

	export class $bog_brl_contact_card extends $.$bog_brl_contact_card {
		Contact_link() {
			return this.link_uri() ? super.Contact_link() : null!
		}

		Contact_note() {
			return this.note() ? super.Contact_note() : null!
		}
	}

	export class $bog_brl_footer extends $.$bog_brl_footer {
		home_link() {
			return make_page_link(this, 'home')
		}

		catalog_link() {
			return make_page_link(this, 'catalog')
		}

		landlords_link() {
			return make_page_link(this, 'landlords')
		}

		about_link() {
			return make_page_link(this, 'about')
		}

		contacts_link() {
			return make_page_link(this, 'contacts')
		}

		telegram_url() {
			return CONTACTS.telegram.url
		}

		phone_url() {
			return CONTACTS.phone.url
		}
	}
}
