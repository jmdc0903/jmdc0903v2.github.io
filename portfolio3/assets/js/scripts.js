// JavaScript code for dynamically adding car models
document.addEventListener('DOMContentLoaded', function() {
    const carModelsData = [
      { name: 'Model 1', image: 'model1.jpg', description: 'Description of Model 1' },
      { name: 'Model 2', image: 'model2.jpg', description: 'Description of Model 2' },
      { name: 'Model 3', image: 'model3.jpg', description: 'Description of Model 3' }
    ];

    const carModelsContainer = document.getElementById('carModels');
    
    carModelsData.forEach(model => {
      const modelCard = `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="images/${model.image}" class="card-img-top" alt="${model.name}">
            <div class="card-body">
              <h5 class="card-title">${model.name}</h5>
              <p class="card-text">${model.description}</p>
            </div>
          </div>
        </div>
      `;
      carModelsContainer.innerHTML += modelCard;
    });
  });