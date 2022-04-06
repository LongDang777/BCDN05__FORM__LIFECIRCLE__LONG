import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableDSSV extends Component {
  constructor(props) {
    super(props);
    this.state = { tenSvSearch : '' };
  }
  renderSinhVien = () => {
    let { mangSV } = this.props;
    return mangSV.filter(sv => sv.hoTen.toLowerCase().includes(this.state.tenSvSearch))
    .map((sv, index) => {
      return (
        <tr key={sv.maSV}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
          <td>
            <button className='btn btn-danger' onClick={() => {
              let action = {
                type: 'XOA_SINH_VIEN',
                xoaMaSV: sv.maSV
              }
              this.props.dispatch(action);
            }}>Xóa</button>
            <button className='btn btn-info ml-2' onClick={() => {
              let action = {
                type: 'XEM_THONG_TIN',
                thongTinSV: sv
              }
              this.props.dispatch(action);
            }} >Xem</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='col-12 text-right'>
          <label className='mr-3'>Tìm Sinh Viên</label>
          <input className='my-2 rounded p-1' placeholder='Search...' onChange={(e) => {
            this.setState({
              tenSvSearch: e.target.value.toLocaleLowerCase()
            })
          }
        }
         />
        </div>
        <table class="table">
          <thead>
            <tr className='bg-dark text-white'>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSinhVien()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    mangSV: rootReducer.quanlySVReducer.mangSV,
    mangSVSearch : rootReducer.quanlySVReducer.mangSVSearch
  }
}

export default connect(mapStateToProps)(TableDSSV)