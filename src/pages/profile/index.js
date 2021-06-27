import React, { Component } from 'react'
import Input from '../../components/Input/Input'
import { FormValidation } from '../../Utility/FormValidation';
import avatar from '../../assets/avatar.png'
import './profile.scss'

class Profile extends Component {
  state = {
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        placeholder: "First name",
        inputType: 'text',
        type: 'firstName',
        error: null,
        errorMsg: 'First name cannot be blank',
        value: '',
        isRequired: true
      },
      {
        name: 'lastName',
        label: 'Last Name',
        placeholder: "Last Name",
        inputType: 'text',
        type: 'lastName',
        error: null,
        errorMsg: 'Last name cannot be blank',
        value: '',
        isRequired: true
      },
    ],
    loading: false,
    isValid: false,
    avatarFile: null
  }
  handleImageUpload = (e) => {
    this.setState(prev => ({
      ...prev,
      avatarFile: URL.createObjectURL(e.target.files[0])
    }))
  }
  onChangeInput = (val, index) => {
    const { fields } = this.state;
    fields[index].value = val;
    this.setState({ fields });
  }
  prepareData = () => {
    let formData = {}
    const data = this.state.fields.map((data) => data)
    for (const key in data) {
      formData = {
        ...formData,
        ...{ [data[key].name]: data[key].value }
      }
    }
    return formData
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { fields } = this.state;
    const { updatedFields, isValid } = FormValidation({ fields });
    this.setState({ loading: true, fields: updatedFields });
    if (isValid) {
      this.setState({ isValid: true, loading: false })
      alert(JSON.stringify(this.prepareData()))
      const newFlds = fields.map(fld => ({ ...fld, value: '' }))
      this.setState({ fields: newFlds })
    }
    this.setState({ loading: false })
  }
  render() {
    const { fields, avatarFile } = this.state
    return (
      <div className='col-10 col-md-6 mx-auto profile' >
        <form className='px-2'>
          <div className="form-group row avatar">
            <div className="avatar_img">
              <img src={avatarFile ? avatarFile : avatar} alt="avatar" />
              <input
                type="file"
                className="form-control-file avatar_upload"
                id="exampleFormControlFile1"
                onChange={this.handleImageUpload}
              />
            </div>
          </div>
          <div className="form-group row">
            {fields.map((fld, index) => {
              return (
                <Input
                  key={fld.name}
                  {...fld}
                  onChange={val => this.onChangeInput(val, index)}
                />
              )
            })
            }
          </div>
          <button
            type="submit"
            className="btn btn-success"
            onClick={this.onSubmit}
            disabled={this.state.loading}
          >{this.state.loading ? 'loading...' : 'Save'}</button>

        </form>
      </div>
    )
  }
}

export default Profile;
