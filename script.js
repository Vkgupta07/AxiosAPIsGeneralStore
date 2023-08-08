
function createProduct() {
  let product_name = document.getElementById("productName").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  let quantity = document.getElementById("quantity").value;
console.log(product_name, description, price, quantity)

  let obj = {
    product_name,
    description,
    price,
    quantity
  };

  axios
    .post(
      "https://crudcrud.com/api/bb9503ffa41f4dc0a2ecd8e980b20079/GeneralStore",
      obj
    )
    .then((res) => {
      console.log("data added...");
      console.log(res.data);
      getTodo();
    })
    .catch((err) => {
      console.log("something is wrong in creating data to server", err);
    });
}

function getTodo() {
  axios
    .get("https://crudcrud.com/api/bb9503ffa41f4dc0a2ecd8e980b20079/GeneralStore")
    .then((res) => {
      showTodoOnScreen(res.data);
    }).catch((err)=>{
      console.log("gettdata",err)
    })
}

getTodo();



function showTodoOnScreen(data) {
  let dataas = data;
  console.log(dataas)
  let html = "";
  dataas.forEach((element) => {
    // console.log(element);
    html += `
            <tr>
            <td>${element.product_name}</td>
            <td>${element.description}</td>
            <td>${element.price}</td>
            <td>${element.quantity}</td>
            <td>
            <button id="select1" onclick="select1('${element._id}','${element.product_name}','${element.description}','${element.price}','${element.quantity}')">1</button>
             </td>
            <td>
            <button id="select2" onclick="select2('${element._id}','${element.product_name}','${element.description}','${element.price}','${element.quantity}')">2</button>
             </td>
             <td>
             <button id="select3" onclick="select3('${element._id}','${element.product_name}','${element.description}','${element.price}','${element.quantity}')">3</button>
              </td>

            </tr>
            `;
  });
  document.getElementById("tbody").innerHTML = html;
}



function select1(id,product_name,description,price,quantity){

let quant = quantity
  let obj = {
    product_name,
    description,
    price,
    quantity: quant - 1
  }
console.log(obj)


  axios.put(`https://crudcrud.com/api/bb9503ffa41f4dc0a2ecd8e980b20079/GeneralStore/${id}`,obj).then((res)=>{
  console.log("hdashk")  
  console.log(res.data)
  getTodo(res.data)
  })
}

function select2(id,product_name,description,price,quantity){

  let quant = quantity
    let obj = {
      product_name,
      description,
      price,
      quantity: quant - 2
    }
  console.log(obj)
  
  
    axios.put(`https://crudcrud.com/api/bb9503ffa41f4dc0a2ecd8e980b20079/GeneralStore/${id}`,obj).then((res)=>{
    console.log("hdashk")  
    console.log(res.data)
    getTodo(res.data)
    })
  }

  function select3(id,product_name,description,price,quantity){

    let quant = quantity
      let obj = {
        product_name,
        description,
        price,
        quantity: quant - 3
      }
    console.log(obj)
    
    
      axios.put(`https://crudcrud.com/api/bb9503ffa41f4dc0a2ecd8e980b20079/GeneralStore/${id}`,obj).then((res)=>{
      console.log("hdashk")  
      console.log(res.data)
      getTodo(res.data)
      })
    }
  
