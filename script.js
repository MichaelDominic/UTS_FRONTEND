let saleItems = [];
let discounts = 0.01;
let taxRate = 0.09;

function addItem(name, price) {
  saleItems.push({ name, price });
  updateSale();
}

function updateSale() {
  const saleItemsContainer = document.getElementById("sale-items");
  saleItemsContainer.innerHTML = "";

  let total = 0;
  saleItems.forEach((item) => {
    total += item.price;
    const itemElement = document.createElement("div");
    itemElement.className = "sale-item";
    itemElement.innerHTML = `<p>${item.name}</p><p>$${item.price.toFixed(
      2
    )}</p>`;
    saleItemsContainer.appendChild(itemElement);
  });

  const discountsElement = document.getElementById("discounts");
  discountsElement.innerText = `-$${discounts.toFixed(2)}`;

  const tax = total * taxRate;
  const taxElement = document.getElementById("tax");
  taxElement.innerText = `$${tax.toFixed(2)}`;

  const chargeButton = document.getElementById("charge-button");
  chargeButton.innerText = `Charge $${(total - discounts + tax).toFixed(2)}`;

  const saleHeader = document.querySelector(".sale-header h2");
  saleHeader.innerText = `Current sale (${saleItems.length})`;
}

function charge() {
  alert(
    `Total amount charged: $${(
      saleItems.reduce((acc, item) => acc + item.price, 0) -
      discounts +
      saleItems.reduce((acc, item) => acc + item.price, 0) * taxRate
    ).toFixed(2)}`
  );
  saleItems = [];
  updateSale();
}

function showMenu() {
  const itemsContainer = document.getElementById("items");
  itemsContainer.innerHTML = `
        <div class="item" onclick="addItem('Spaghetti', 4.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTv-lJYSJ5f24cs_y72ttvTBS2vBOZ5rkw&s" height="100" width="100"/>
            <p>Spaghetti</p>
        </div>
        <div class="item" onclick="addItem('Pizza', 9.00)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvY6pK22iL0gsmqSt5-cfoC7XcLxyVHuBF2g&s" height="100" width="100"/>
            <p>Pizza</p>
        </div>
        <div class="item" onclick="addItem('Burger', 6.00)">
            <img src="https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg" height="100" width="100"/>
            <p>Burger</p>
        </div>
        <div class="item" onclick="addItem('French fries', 3.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&s" height="100" width="100"/>
            <p>French fries</p>
        </div>
        <div class="item" onclick="addItem('Steak', 10.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtL9EkxtdRMq2jgZ8NVT2ATf2h__AA_0TpQ&s" height="100" width="100"/>
            <p>Steak</p>
        </div>
        <div class="item" onclick="addItem('Chicken Katsu', 6.50)">
            <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-05-chicken-katsu-190%2Fchicken-katsu-190-069-horizontal" height="100" width="100"/>
            <p>Chicken Katsu</p>
        </div>
        <div class="item" onclick="addItem('Salad', 4.50)">
            <img src="https://www.allrecipes.com/thmb/Q84xeMgnOJPZAUOdNyrb9dbFZr4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/285625-ChefsSalad_MFS_006-2550ecee70ae46dbaec530a58314c99c.jpg" height="100" width="100"/>
            <p>Salad</p>
        </div>
        <div class="item" onclick="addItem('Taro', 3.50)">
            <img src="https://kurio-img.kurioapps.com/21/04/01/b5055b11-a979-4a3a-8460-d9e66b912351.jpe" height="100" width="100"/>
            <p>Taro</p>
        </div>
        <div class="item" onclick="addItem('Matcha Latte', 3.50)">
            <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7cfb79f22186cc268533023e8dd80b76/Derivates/332ef194335299044ce59aeff0d600482d22b916.jpg" height="100" width="100"/>
            <p>Matcha Latte</p>
        </div>
        <div class="item" onclick="addItem('Smooth Sweet Tea', 2.00)">
            <img src="https://www.allrecipes.com/thmb/REETjYFdVRmMtwVHPT66VmQVmmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d.jpg" height="100" width="100"/>
            <p>Smooth Sweet Tea</p>
        </div>
        <div class="item" onclick="addItem('Coffee', 3.00)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH1wnWp2rTXKfaIQsAlkV1WkcXRlWjTm2OA&s" height="100" width="100"/>
            <p>Coffee</p>
        </div>
        <div class="item" onclick="addItem('Mango Tea', 2.75)">
            <img src="https://blog.firepot.com/hs-fs/hubfs/Chilled%20Tea%20Cocktail%20Recipe%20Guide/MangoBergSweatea-1.jpg?width=2000&name=MangoBergSweatea-1.jpg" height="100" width="100"/>
            <p>Mango Tea</p>
        </div>
        <div class="item" onclick="addItem('Cheese Cake', 2.50)">
            <img src="https://i.ytimg.com/vi/3Am4DfPB2Dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBn26Of7hnISSlv1VieCYncAXEeAg" height="100" width="100"/>
            <p>Cheese Cake</p>
            </div>
         <div class="item" onclick="addItem('Chocolate Cake', 3.00)">
                <img src="https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg" height="100" width="100"/>
                <p>Chocolate Cake</p>
            </div>
        <div class="item" onclick="addItem('Creamy Ice Cream', 2.00)">
            <img src="https://www.nestleprofessional.co.id/sites/default/files/srh_recipes/ab21943d2aa5c9d7ce5fc6da29f84fe8.png" height="100" width="100"/>
            <p>Creamy Ice Cream</p>
        </div>
        <div class="item" onclick="addItem('Choco Ice Cream', 2.00)">
            <img src="https://www.allrecipes.com/thmb/qU9RzlqCysXOoaH-urHNCCQLXLs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-4x3-0343db03e550403aaab1a0d52cbef744.jpg" height="100" width="100"/>
            <p>Choco Ice Cream</p>
        </div>
    `;
}

function showFavorites() {
  const itemsContainer = document.getElementById("items");
  itemsContainer.innerHTML = `
          <div class="item" onclick="addItem('Cheese Cake', 2.50)">
            <img src="https://i.ytimg.com/vi/3Am4DfPB2Dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBn26Of7hnISSlv1VieCYncAXEeAg" height="100" width="100"/>
            <p>Cheese Cake</p>
            </div>
         <div class="item" onclick="addItem('Chocolate Cake', 3.00)">
                <img src="https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg" height="100" width="100"/>
                <p>Chocolate Cake</p>
            </div>
        <div class="item" onclick="addItem('Spaghetti', 4.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTv-lJYSJ5f24cs_y72ttvTBS2vBOZ5rkw&s" height="100" width="100"/>
            <p>Spaghetti</p>
        </div>
        <div class="item" onclick="addItem('Salad', 4.50)">
            <img src="https://www.allrecipes.com/thmb/Q84xeMgnOJPZAUOdNyrb9dbFZr4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/285625-ChefsSalad_MFS_006-2550ecee70ae46dbaec530a58314c99c.jpg" height="100" width="100"/>
            <p>Salad</p>
        </div>
        <div class="item" onclick="addItem('Matcha Latte', 3.50)">
            <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7cfb79f22186cc268533023e8dd80b76/Derivates/332ef194335299044ce59aeff0d600482d22b916.jpg" height="100" width="100"/>
            <p>Matcha Latte</p>
        </div>
    `;
}

function showFood() {
  const itemsContainer = document.getElementById("items");
  itemsContainer.innerHTML = `
        <div class="item" onclick="addItem('Spaghetti', 4.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FTv-lJYSJ5f24cs_y72ttvTBS2vBOZ5rkw&s" height="100" width="100"/>
            <p>Spaghetti</p>
        </div>
        <div class="item" onclick="addItem('Pizza', 9.00)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvY6pK22iL0gsmqSt5-cfoC7XcLxyVHuBF2g&s" height="100" width="100"/>
            <p>Pizza</p>
        </div>
        <div class="item" onclick="addItem('Burger', 6.00)">
            <img src="https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg" height="100" width="100"/>
            <p>Burger</p>
        </div>
        <div class="item" onclick="addItem('French fries', 3.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8N0tUijh_HHnvvTSUA-vNph2IuwTKWUgoYg&s" height="100" width="100"/>
            <p>French fries</p>
        </div>
        <div class="item" onclick="addItem('Steak', 10.50)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJtL9EkxtdRMq2jgZ8NVT2ATf2h__AA_0TpQ&s" height="100" width="100"/>
            <p>Steak</p>
        </div>
        <div class="item" onclick="addItem('Chicken Katsu', 6.50)">
            <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipes%2F2024-05-chicken-katsu-190%2Fchicken-katsu-190-069-horizontal" height="100" width="100"/>
            <p>Chicken Katsu</p>
        </div>
        <div class="item" onclick="addItem('Salad', 4.50)">
            <img src="https://www.allrecipes.com/thmb/Q84xeMgnOJPZAUOdNyrb9dbFZr4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/285625-ChefsSalad_MFS_006-2550ecee70ae46dbaec530a58314c99c.jpg" height="100" width="100"/>
            <p>Salad</p>
        </div>
    `;
}

function showDrink() {
  const itemsContainer = document.getElementById("items");
  itemsContainer.innerHTML = `
        <div class="item" onclick="addItem('Taro', 3.50)">
            <img src="https://kurio-img.kurioapps.com/21/04/01/b5055b11-a979-4a3a-8460-d9e66b912351.jpe" height="100" width="100"/>
            <p>Taro</p>
        </div>
        <div class="item" onclick="addItem('Matcha Latte', 3.50)">
            <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7cfb79f22186cc268533023e8dd80b76/Derivates/332ef194335299044ce59aeff0d600482d22b916.jpg" height="100" width="100"/>
            <p>Matcha Latte</p>
        </div>
        <div class="item" onclick="addItem('Smooth Sweet Tea', 2.00)">
            <img src="https://www.allrecipes.com/thmb/REETjYFdVRmMtwVHPT66VmQVmmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/109190-smooth-sweet-tea-DDMFS-4x3-9e849a386d414cb2b852099f02b6782d.jpg" height="100" width="100"/>
            <p>Smooth Sweet Tea</p>
        </div>
        <div class="item" onclick="addItem('Coffee', 3.00)">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcH1wnWp2rTXKfaIQsAlkV1WkcXRlWjTm2OA&s" height="100" width="100"/>
            <p>Coffee</p>
        </div>
        <div class="item" onclick="addItem('Mango Tea', 2.75)">
            <img src="https://blog.firepot.com/hs-fs/hubfs/Chilled%20Tea%20Cocktail%20Recipe%20Guide/MangoBergSweatea-1.jpg?width=2000&name=MangoBergSweatea-1.jpg" height="100" width="100"/>
            <p>Mango Tea</p>
        </div>
    `;
}

function showDessert() {
  const itemsContainer = document.getElementById("items");
  itemsContainer.innerHTML = `
        <div class="item" onclick="addItem('Cheese Cake', 2.50)">
            <img src="https://i.ytimg.com/vi/3Am4DfPB2Dk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBn26Of7hnISSlv1VieCYncAXEeAg" height="100" width="100"/>
            <p>Cheese Cake</p>
            </div>
         <div class="item" onclick="addItem('Chocolate Cake', 3.00)">
                <img src="https://sugargeekshow.com/wp-content/uploads/2023/10/easy_chocolate_cake_slice.jpg" height="100" width="100"/>
                <p>Chocolate Cake</p>
            </div>
        <div class="item" onclick="addItem('Creamy Ice Cream', 2.00)">
            <img src="https://www.nestleprofessional.co.id/sites/default/files/srh_recipes/ab21943d2aa5c9d7ce5fc6da29f84fe8.png" height="100" width="100"/>
            <p>Creamy Ice Cream</p>
        </div>
        <div class="item" onclick="addItem('Choco Ice Cream', 2.00)">
            <img src="https://www.allrecipes.com/thmb/qU9RzlqCysXOoaH-urHNCCQLXLs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-4x3-0343db03e550403aaab1a0d52cbef744.jpg" height="100" width="100"/>
            <p>Choco Ice Cream</p>
        </div>
    `;
}
