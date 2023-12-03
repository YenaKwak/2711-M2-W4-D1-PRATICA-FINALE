const jobs = [
  
    { title: "Marketing Intern", location: "US, NY, New York" },
    {title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
  ]



  
function searchJobs() { //The function searches for jobs based on the country and occupation entered by the user.
  const countryInput = document.getElementById('countryInput').value.trim().toLowerCase();
  const jobInput = document.getElementById('jobInput').value.trim().toLowerCase(); 
  //Takes the value of the element with id 'countryInput' from HTML, removes leading and trailing spaces, and converts it to lowercase. This cleans up the value received in the Country field.
   //HTML에서 id가 'countryInput'인 요소의 값을 가져와서 앞뒤의 공백을 제거하고 소문자로 변환합니다. 이는 국가 입력란에서 받은 값을 정리합니다.
   if (countryInput === '' && jobInput === '') {
    // 결과를 표시하는 컨테이너에 메시지를 삽입. (아무것도 입력하지 않았을때)
    document.getElementById('results').innerHTML = '<p>Please insert at least one.<br>하나라도 입력하세요.</p>';
    return; // 함수 실행 종료
  }
  
  
   const countryKeywords = countryInput.split(/\s*,\s*/);
  //Create an array of country inputs, separated by commas. This array can represent multiple countries. 국가 입력값을 쉼표로 구분하여 배열로 만듭니다. 이 배열은 여러 국가를 나타낼 수 있습니다.

  const results = jobs.filter(job => //Find tasks that meet the conditions through filtering in the array. 배열에서 필터링을 통해 조건에 맞는 작업들을 찾습니다.
    countryKeywords.every(countryKeyword => job.location.toLowerCase().includes(countryKeyword)) && //Ensure that all entered country keywords are included in the job's location.
    job.title.toLowerCase().includes(jobInput) // Make sure occupation is included. 직종이 포함되어 있는지 확인합니다.
  );

  displayResults(results); //Call the displayResults function with the filtered results 필터된 결과와 함께 displayResults 함수를 호출.
}


document.getElementById('countryInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    searchJobs();
  }
});

document.getElementById('jobInput').addEventListener('keypress', function(event){
if (event.key === 'Enter') {
  searchJobs();
}
})






//Start display to show to user사용자에게 보여줄 화면 시작
function displayResults(results) {
    //결과를 표시할 컨테이너를 가져옵니다.
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // 결과 컨테이너 초기화

  //검색된 결과의 수를 계산
  const resultCount = results.length;

  //결과를 담는 객체를 생성
  const resultObject = {  //output will be like {result: Array(36), count: 36}
    result: results,
    count: resultCount,
  };

    //검색된 작업이 아무것도 없을 경우..
  if (resultCount === 0) {
    resultsContainer.innerHTML = '<p>No matching jobs found.</p>';
  } else { //있을 경우!

    // 테이블 생성
    const table = document.createElement('table');
    table.classList.add('job-table');

    // 테이블 헤더 생성
    const headerRow = table.insertRow();
    const numberHeader = headerRow.insertCell(0);
    numberHeader.textContent = 'No.'; // 여기에는 검색결과를 숫자로 차례대로 넣을거야
    const titleHeader = headerRow.insertCell(1);
    titleHeader.textContent = 'Title'; // job title
    const locationHeader = headerRow.insertCell(2);
    locationHeader.textContent = 'Location'; //job location


    // 검색 결과를 테이블에 추가
    results.forEach((job, index) => {
      const row = table.insertRow();
      const numberCell = row.insertCell(0);
      numberCell.textContent = index +1; //0부터 시작하니 1을 더해줌
      const titleCell = row.insertCell(1);
      titleCell.innerHTML = `<strong>${job.title}</strong>`;
      const locationCell = row.insertCell(2);
      locationCell.textContent = job.location;
    });


    // 결과 컨테이너에 테이블 추가
    resultsContainer.appendChild(table);
  }



  console.log(resultObject); //결과 확인하기
}





