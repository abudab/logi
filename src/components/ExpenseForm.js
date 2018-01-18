import React from 'react'
import uuid from 'uuid/v4'
import ContainerComponent from "./ContainerComponent";

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.state.obj={
            date: "", description: "", category: "", amountConcat: ""
        };
    }

    change = (who) => (what) => {
        let change= Object.assign(this.state.obj, {});
        change[who]= what.target.value;
        this.setState({
            obj:change
        })
    }

    add = () => {
        let elems = Object.assign(this.state.obj, {});
        let amount = elems.amountConcat;
        elems.id = uuid();
        elems.amount = {
            value: parseFloat(amount.substring(1)),
            currency: amount.substring(0, 1)
        }
        this.props.onAdd(elems);
    }

    render() {
        const {obj} = this.state;
        return (
            <ContainerComponent>
                <div className="row"><div className="col-4">Date</div>
                    <div className="col-8"><input type="date" value={obj.date}
                                 onChange={this.change('date')}/></div></div>
                <div className="row"><div className="col-4">Description</div>
                    <div className="col-8"><input value={obj.description}
                                 onChange={this.change('description')}/></div></div>
                <div className="row"><div className="col-4">Category</div>
                    <div className="col-8"><input value={obj.category}
                                 onChange={this.change('category')}/></div></div>
                <div className="row" ><div className="col-4">Amount</div>
                    <div className="col-8"><input value={obj.amountConcat}
                                 onChange={this.change('amountConcat')}/></div></div>
                <div className="row"><div className="col-4">
                    <input type="button" className="btn btn-primary" value="Add" onClick={this.add}/>
                </div></div>

            </ContainerComponent>)
    }
}

export default ExpenseForm