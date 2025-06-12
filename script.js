
let allCountries = [];
let filteredCountries = [];

const searchInput = document.getElementById('searchInput');
const countriesGrid = document.getElementById('countriesGrid');
const loading = document.getElementById('loading');
const errorMessage = document.getElementById('errorMessage');
const retryBtn = document.getElementById('retryBtn');

// API endpoint
const API_URL = 'https://api.sampleapis.com/countries/countries';


const formatPopulation = population => {
    if (population >= 1000000) return (population / 1000000).toFixed(1) + 'M';
    if (population >= 1000) return (population / 1000).toFixed(0) + 'K';
    return population.toLocaleString();
};

// Promise-based API Functions
const fetchCountries = () => {
    showLoading();
    hideError();

    return fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        });
};

const loadCountryDetails = countryCodes => {
    const promises = countryCodes.map(code =>
        fetch(`https://api.sampleapis.com/countries/countries/${code}`)
            .then(response => response.json())
    );

    return Promise.all(promises)
        .then(results => {
            console.log('Promise.all() completed - All country details loaded');
            return results;
        })
        .catch(error => {
            console.error('Promise.all() failed:', error);
            throw error;
        });
};

const getFastestCountryData = urls => {
    const promises = urls.map(url =>
        fetch(url).then(response => response.json())
    );

    return Promise.race(promises)
        .then(result => {
            console.log('Promise.race() completed - Fastest response received');
            return result;
        })
        .catch(error => {
            console.error('Promise.race() failed:', error);
            throw error;
        });
};


const showLoading = () => {
    loading.style.display = 'block';
    countriesGrid.style.display = 'none';
};

const hideLoading = () => {
    loading.style.display = 'none';
    countriesGrid.style.display = 'grid';
};

const showError = () => {
    errorMessage.style.display = 'block';
    countriesGrid.style.display = 'none';
};

const hideError = () => {
    errorMessage.style.display = 'none';
};

const createCountryCard = country => {
    const card = document.createElement('div');
    card.className = 'country-card';

    const flagUrl = country.media?.flag || '';
    const name = country.name || 'Unknown';
    const capital = country.capital || 'Unknown';
    const population = country.population || 0;

    card.innerHTML = `
        <img src="${flagUrl}" alt="${name} flag" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij5ObyBJbWFnZTwvdGV4dD48L3N2Zz4='">
        <div class="country-info">
            <h3 class="country-name">${name}</h3>
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Population:</strong> ${formatPopulation(population)}</p>
        </div>
    `;

    card.addEventListener('click', () => showCountryDetails(country));

    return card;
};


const renderCountries = countries => {
    countriesGrid.innerHTML = '';
    if (countries.length === 0) {
        countriesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #666; font-size: 18px; padding: 60px 0;">No countries found matching your criteria.</p>';
        return;
    }
    countries.forEach(country => countriesGrid.appendChild(createCountryCard(country)));
};

const filterCountries = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    filteredCountries = allCountries.filter(country => {
        return !searchTerm ||
            country.name?.toLowerCase().includes(searchTerm) ||
            country.capital?.toLowerCase().includes(searchTerm);
    });

    renderCountries(filteredCountries);
};

const loadAndProcessCountries = () => {
    fetchCountries()
        .then(data => {
            console.log('Countries fetched successfully');
            return data.map(country => ({
                ...country,
                searchableText: `${country.name} ${country.capital}`.toLowerCase()
            }));
        })
        .then(processedData => {
            console.log('Countries processed successfully');
            allCountries = processedData;
            filteredCountries = [...allCountries];
            return processedData;
        })
        .then(countries => {
            hideLoading();
            renderCountries(countries);
            console.log(`Loaded ${countries.length} countries`);
        })
        .catch(error => {
            console.error('Error loading countries:', error);
            hideLoading();
            showError();
        });
};

// Debounce
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const debouncedFilter = debounce(filterCountries, 300);
searchInput.addEventListener('input', debouncedFilter);
retryBtn.addEventListener('click', loadAndProcessCountries);

document.addEventListener('DOMContentLoaded', () => {
    console.log('Countries App initialized');
    loadAndProcessCountries();
});

// Export
window.CountriesApp = {
    loadAndProcessCountries,
    fetchCountries,
    filterCountries
};
