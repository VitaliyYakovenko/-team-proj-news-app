function createMarkup(articles) {
  const markup = articles
    .map(
      ({
        web_url,
        uri,
        lead_paragraph,
        headline,
        pub_date,
        multimedia,
        section_name,
      }) => {
        const image = multimedia.find(image => {
          return image.type === 'image';
        });
        const link = image
          ? 'http://www.nytimes.com/' + image.url
          : 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000';
        return `<li class="card-set__item news-card" data-date="${pub_date
          .split('')
          .splice(0, 10)
          .join('')
          .replaceAll('-', '/')}">
        <article>
         <div class="box-img">
        <div class="news-card__img"><img class="img" src=${link} alt="News image" height = "395">
        </div>
            <p class="box-img__inform">${section_name}</p>

            <p class="box-img__text">Already read   &#10003</p>

            <button type="button" class="favorite-btn">
                Add to favorite 
              <i class="fa-regular fa-heart"></i>
            </button>
        </div>
        <h2 class="news-card__title">${headline.main}</h2>
        <p class="news-card__text">${lead_paragraph}</p>
        <div class="news-card__inform">
            <p class="news-card__date">
						${pub_date.split('').splice(0, 10).join('').replaceAll('-', '/')}</p>
            <a class="news-card__link" target="_blank" href="${web_url}" data-article-uri="${uri}">
                Read more
            </a>
        </div>
      </article>
    </li>   
`;
      }
    )
    .join('');
  return markup;
}

function createMostPopularMarkup(articles) {
  const markup = articles
    .map(({ uri, url, abstract, title, published_date, media, section }) => {
      let image = media[0];
      const link = image
        ? image['media-metadata'][2].url
        : 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000';
      return `<li class="card-set__item news-card" data-date="${published_date
        .split('')
        .splice(0, 10)
        .join('')
        .replaceAll('-', '/')}">
        <article>
        <div class="box-img">
        <div class="news-card__img"><img src=${link} class="img" alt="News image" height = "395">
        </div>
            <p class="box-img__inform">${section}</p>

            <p class="box-img__text">Already read   &#10003</p>

            <button type="button" class="favorite-btn">
                Add to favorite 
              <i class="fa-regular fa-heart"></i>
            </button>
        </div>
        <h2 class="news-card__title">${title}</h2>
        <p class="news-card__text">${abstract}</p>
        <div class="news-card__inform">
            <p class="news-card__date">
						${published_date.split('').splice(0, 10).join('').replaceAll('-', '/')}</p>
            <a class="news-card__link" target="_blank" data-article-uri="${uri}" href="${url}" >
                Read more
            </a>
        </div>
      </article>
    </li>

`;
    })
    .join('');
  return markup;
}

function createCategoriesMarkup(articles) {
  const markup = articles
    .map(
      ({
        url,
        uri,
        abstract,
        title,
        updated_date,
        multimedia,
        section,
        created_date,
      }) => {
        const image = multimedia
          ? multimedia[2].url
          : 'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000';

        return `<li class="card-set__item news-card" data-date="${created_date
          .split('')
          .splice(0, 10)
          .join('')
          .replaceAll('-', '/')}">
        <article>
         <div class="box-img">
        <div class="news-card__img"><img src=${image} class="img" alt="News image" height = "395">
        </div>
            <p class="box-img__inform">${section}</p>
            
            <p class="box-img__text">Already read   &#10003</p>

            <button type="button" class="favorite-btn">
                Add to favorite
               <i class="fa-regular fa-heart"></i>
            </button>
        </div>
        <h2 class="news-card__title">${title}</h2>
        <p class="news-card__text">${abstract}</p>
        <div class="news-card__inform">
            <p class="news-card__date">
						${updated_date.split('').splice(0, 10).join('').replaceAll('-', '/')}</p>
            <a class="news-card__link" target="_blank" data-article-uri="${uri}" href="${url}">
                Read more
            </a>
        </div>
      </article>
    </li>   
`;
      }
    )
    .join('');
  return markup;
}

function createWeatherAppMarkup(
  { temp, weather, city, icon },
  currentDay,
  allInfoDays
) {
  return `
  <li class="card-set__item weather__app" >
    <div class="weather__app--info"> 
        <span class="weather__app--degree" >${Math.round(temp)}°</span>        
        <div class="weather__app--geo-position">
            <span class="weather__app--days-value" >${weather}</span>
            <p class="weather__app--location">
               <i class="fa-solid fa-location-dot"></i>
                <span class="weather__app--city">${city}</span>
            </p>
        </div>
    </div>

    <img class="weather__app--skyCons" src="https://openweathermap.org/img/wn/${icon}@4x.png"/>

    <div class="weather__app--date">
        <span class="weather__app--day">${currentDay()}</span>
        <span class="weather__app--year">${allInfoDays()}</span>
    </div>      
    <a 
    href="https://www.meteoprog.com/ua/"
    class="weather__app--link"
    target="_blank"
    rel="noopener nofolow norefferer"
    >
    Weather for Week
    </a>
</li>`;
}

function createReadListMarkup(date, articlesMarkup) {
  return `
        <li class="date-list__item">
            <button class="date-list__btn">
                <span class="date-list__btn-text">${date}</span>
                <span class="date-list__btn-elem">
                  <i class="fa-solid fa-angle-down date-list__btn-svg" id="icon"></i>
                </span>
            </button>
            <ul class="card-set">
              ${articlesMarkup}
            </ul>
        </li>
`;
}

function createCardReadMarkup(articles) {
  const markup = articles
    .map(({ img, uri, title, descr, date, link, category }) => {
      return `<li class="card-set__item news-card" data-date="${date}">
        <article>
         <div class="box-img">
        <div class="news-card__img"><img src=${img} class="img" alt="News image" height = "395">
        </div>
            <p class="box-img__inform">${category}</p>
            
            <p class="box-img__text" style="opacity:1;">Have read</p>

            <button type="button" class="favorite-btn">
                Add to favorite
             <i class="fa-regular fa-heart"></i>
            </button>
        </div>
        <h2 class="news-card__title">${title}</h2>
        <p class="news-card__text">${descr}</p>
        <div class="news-card__inform">
            <p class="news-card__date">
						${date}</p>
            <a class="news-card__link" target="_blank" data-article-uri="${uri}" href="${link}">
                Read more
            </a>
        </div>
      </article>
    </li>   
`;
    })
    .join('');

  return markup;
}
export {
  createMarkup,
  createMostPopularMarkup,
  createCategoriesMarkup,
  createWeatherAppMarkup,
  createReadListMarkup,
  createCardReadMarkup,
};
