const eleGrid = document.querySelector('.grid');


for (let i = 1; i < 101; i++) {
  //eleGrid.innerHTML += '<div class="cell" style=""></div>';

  const eleCell = document.createElement('div');
  eleCell.classList.add('cell');
  eleGrid.append(eleCell);
  eleCell.append([i]);

  eleCell.addEventListener('click', function () {
    this.classList.toggle('active')
  });
}