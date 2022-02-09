console.table(groceries);

class App extends React.Component {
    state ={
        groceries: groceries,
        item:'',
        brand:'',
        units: '',
        quantity:'',
        isPurchased:''
    };
    handleChange =(event)=>{
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        const newItem ={
            item:this.state.item,
            brand:this.state.brand,
            units:this.state.units,
            quantity:this.state.quantity,
            isPurchased:this.state.isPurchased 
              
        };
    
    this.setState({
        item:[newItem,...this.state.item],
        brand:'',
        units: '',
        quantity:'',
        isPurchased:''

    })
    }

render(){
    return(
        <div>
            <h1>Grocery List</h1>
       
    <form onSubmit={this.handleSubmit}>
      
        <label htmlFor='item'>Item</label>
        <input type='text'value={this.state.item} name='item'
        onChange={this.handleChange}/>
    <br />
        <label htmlFor='brand'>Brand</label>
        <input type='text'value={this.state.brand} name='brand'
        onChange={this.handleChange}/>
    <br />
        <label htmlFor='units'>Units</label>
        <input type='number'value={this.state.units} name='units'
        onChange={this.handleChange}/>
    <br />    
        <label htmlFor='quantity'>Quantity</label>
        <input type='number'value={this.state.quantity} name='quantity'
        onChange={this.handleChange}/>
    <br />    
        <label htmlFor='isPurchased'>IsPurchased</label>
        <input type='boolen'value={this.state.isPurchased} name='isPurchased'
        onChange={this.handleChange}/>
    <br />
    <br />
        <input type='submit'/> 

    </form>

    <div className ='container'style={{border:'3px dotted blue',padding:'10px'}}>
        <h2>{this.state.item}</h2>
        <h2>{this.state.brand}</h2>
        <h2>{this.state.units}</h2>
        <h2>{this.state.quantity}</h2>
        <h2>{this.state.isPurchased}</h2>
    </div>    


    <ul>
        {this.state.groceries.map((item)=>(
            <li key ={item.name}>
                {item.item} - {item.brand}
            </li>
            
        ))}
    </ul>

    </div>
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))