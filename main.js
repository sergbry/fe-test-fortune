function rank() {

	fetchData(params).then((response) => {
		render(response);
	});

	function render(data) {
		let html = getHtml(data);
		const listElement = document.getElementById('rank-table-list');
		listElement.innerHTML = html;
		listElement.classList.remove('loading');
	}

	/**
	 * Возвращает готовый HTML
	 * @param data - данные в виде массива объектов
	 * @return {string}
	 */
	function getHtml(data) {

		if (data.length === 0) {
			return '<li>Нет данных</li>';
		}

		let html = '';
		for (const row of data) {

			const verified = row.verified ? ' verified' : '';
			const stars = "stars-" + Math.round(row.rating);
			const bonus = row.bonus_amount ? Math.round(row.bonus_amount/100)/10 : 0;
			const badge = row.badge ? row.badge : null;
			let badgeText = '';

			switch(badge) {
				case 'exclusive':
					badgeText = 'Эксклюзив';
					break;
				case 'no-deposit':
					badgeText = 'Без депозита';
					break;
				case 'no-bonus':
					badgeText = 'Нет бонуса';
					break;
				default:
					badgeText = 'Неизвестный бонус';
					break;
			}

			html += `
				<li>
	                <div class="promo-logo${verified}">
	                    <img src="${row.logo}" alt="promo-logo">
	                </div>
	                <a href="${row.internal_link}" class="rating">
	                    <span class="stars ${stars}"></span>
	                    <span class="value">${row.rating}</span>
	                </a>
	                <div class="review">
	                    <span class="value">${row.review_count}</span>
	                </div>
	                <div class="gift">
            `;

			if (badge) {
				html += `
                		<div class="badge ${badge}">${badgeText}</div>
            	`;
			}

			if ( bonus > 0) {
				html += `
                    	<div class="value">${bonus}K ₽</div>
            	`;
			}

			html += `
	                </div>
	                <div class="buttons">
	                    <a href="${row.internal_link}" class="btn-review">Обзор</a>
	                    <a href="${row.external_link}" class="btn-site">Сайт</a>
	                </div>
	            </li>
			`;

		}

		return html;

	}

	/**
	 * Возвращает данные из API
	 * @param params - объект с get-параметрами для запроса
	 * @return {Promise<any>}
	 */
	async function fetchData(params) {
		let result = [];
		const url = new URL(apiUrl);
		for (const key in params) {
			url.searchParams.set(key, params[key]);
		}

		// Без проверок
		// return JSON.parse(await (await fetch(url)).json());

		// С проверками
		await fetch(url)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response status: ' + response.status);
				}
				return response.json();
			})
			.then(data => {
				result = JSON.parse(data);
			})
			.catch(error => {
				console.error('Fetch error:', error);
			});

		return result;

	}
}

rank();
