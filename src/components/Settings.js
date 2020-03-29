import React from 'react';
import base from '../base';

class Settings extends React.Component {

    state = {
        settings: {}
    }

    componentDidMount = () => {

        base.syncState(`BadgerSett/users/${this.props.uid}`, {
            context: this,
            state: 'settings',
            defaultValue: 'notsetdb'
        })

    }

    handleChangeName = e => this.setState({ settings: {...this.state.settings, name: e.target.value} });
    handleChangePos1 = e => this.setState({ settings: {...this.state.settings, Pos1: e.target.value} });
    handleChangePos2 = e => this.setState({ settings: {...this.state.settings, Pos2: e.target.value} });


    render() {
        return (
            <section>
                <h1>Settings</h1>
                <form>
                    <label>
                        Name:
                        <input type="text" value={this.state.settings.name} onChange={this.handleChangeName}/>
                    </label>
                    <br/>
                    <label>
                        Preferred Position:
                        <select value={this.state.settings.Pos1} onChange={this.handleChangePos1}>
                            <option value="QB">QB</option>
                            <option value="WR">WR</option>
                            <option value="C">C</option>
                            <option value="RB">RB</option>
                            <option value="CB">CB</option>
                            <option value="LB">LB</option>
                            <option value="B">B</option>
                            <option value="S">S</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Secondary Position:
                        <select value={this.state.settings.Pos2} onChange={this.handleChangePos2}>
                        <option value="QB">QB</option>
                            <option value="WR">WR</option>
                            <option value="C">C</option>
                            <option value="RB">RB</option>
                            <option value="CB">CB</option>
                            <option value="LB">LB</option>
                            <option value="B">B</option>
                            <option value="S">S</option>
                        </select>
                    </label>
                </form>
            </section>


        )
    }
}

export default Settings;