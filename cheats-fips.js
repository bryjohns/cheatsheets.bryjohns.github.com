cheatsData = typeof(cheatsData) !== 'undefined' ? cheatsData : {};

cheatsData.fips = {
    id: 'fips',
    name: 'FIPS',
    dataType: 'table',
    headers: ['Fips', 'State Abbreviation', 'State'],
    view: {split: 2},
    baseSort: function(a, b) {
        return a[2] > b[2] ? 1 : -1;
    },
    data: [
        ['01', 'AL', 'Alabama'], 
        ['02', 'AK', 'Alaska'], 
        ['03', 'AS', 'American Samoa'], 
        ['04', 'AZ', 'Arizona'], 
        ['05', 'AR', 'Arkansas'], 
        ['06', 'CA', 'California'], 
        ['07', 'CZ', 'Canal Zone'], 
        ['08', 'CO', 'Colorado'], 
        ['09', 'CT', 'Connecticut'], 
        ['10', 'DE', 'Delaware'], 
        ['11', 'DC', 'District Of Columbia'], 
        ['12', 'FL', 'Florida'], 
        ['13', 'GA', 'Georgia'], 
        ['14', 'GU', 'Guam'], 
        ['15', 'HI', 'Hawaii'], 
        ['16', 'ID', 'Idaho'], 
        ['17', 'IL', 'Illinois'], 
        ['18', 'IN', 'Indiana'], 
        ['19', 'IA', 'Iowa'], 
        ['20', 'KS', 'Kansas'], 
        ['21', 'KY', 'Kentucky'], 
        ['22', 'LA', 'Louisiana'], 
        ['23', 'ME', 'Maine'], 
        ['24', 'MD', 'Maryland'], 
        ['25', 'MA', 'Massachusetts'], 
        ['26', 'MI', 'Michigan'], 
        ['27', 'MN', 'Minnesota'], 
        ['28', 'MS', 'Mississippi'], 
        ['29', 'MO', 'Missouri'], 
        ['30', 'MT', 'Montana'], 
        ['31', 'NE', 'Nebraska'], 
        ['32', 'NV', 'Nevada'], 
        ['33', 'NH', 'New Hampshire'], 
        ['34', 'NJ', 'New Jersey'], 
        ['35', 'NM', 'New Mexico'], 
        ['36', 'NY', 'New York'], 
        ['37', 'NC', 'North Carolina'], 
        ['38', 'ND', 'North Dakota'], 
        ['39', 'OH', 'Ohio'], 
        ['40', 'OK', 'Oklahoma'], 
        ['41', 'OR', 'Oregon'], 
        ['42', 'PA', 'Pennsylvania'], 
        ['43', 'PR', 'Puerto Rico'], 
        ['44', 'RI', 'Rhode Island'], 
        ['45', 'SC', 'South Carolina'], 
        ['46', 'SD', 'South Dakota'], 
        ['47', 'TN', 'Tennessee'], 
        ['48', 'TX', 'Texas'], 
        ['49', 'UT', 'Utah'], 
        ['50', 'VT', 'Vermont'], 
        ['52', 'VI', 'Virgin Islands'], 
        ['51', 'VA', 'Virginia'], 
        ['53', 'WA', 'Washington'], 
        ['54', 'WV', 'West Virginia'], 
        ['55', 'WI', 'Wisconsin'], 
        ['56', 'WY', 'Wyoming']
    ]
};