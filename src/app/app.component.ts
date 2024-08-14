import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CellCustomComponent } from './cell-custom/cell-custom.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export class Product {
  private id: any;
  private name: any;
  private address: any;
  private gender: any;

  constructor(id: any, name: any, address: any, gender: any) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.gender = gender;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.onLoad;
    this.createTable();
    setTimeout(() => {
      this.onLoad();
    }, 3000)
  }

  id: any;
  name: any;
  address: any;
  gender: any;

  public product: Product;

  constructor(private http: HttpClient,
    private modalService: BsModalService,) {
    this.product = new Product(this.id, this.name, this.address, this.gender);
  };

  columDefs: any;
  rowData: any
  modalRef: BsModalRef | undefined;

  onLoad() {
    this.http.get<any>('http://localhost:8070/api/sp1/product/list').subscribe(
      response => {
        this.rowData = response;
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  STYLE_TABLE = {
    'font-weight': '500',
    'font-size': '12px',
    'align-items': 'center',
    'top': '30px'
  }

  createTable() {
    this.columDefs = [
      { headerName: 'Name', filed: 'name', cellStyle: this.STYLE_TABLE },
      { headerName: 'Brithday', filed: 'birthday', cellStyle: this.STYLE_TABLE },
      { headerName: 'Address', filed: 'address', cellStyle: this.STYLE_TABLE },
      { headerName: 'Gender', filed: 'gender', cellStyle: this.STYLE_TABLE },
      { headerName: 'Action', cellRendererFramwork: CellCustomComponent, cellStyle: this.STYLE_TABLE },
    ];
  }

  addProduct() {
    this.product = new Product(this.id, this.name, this.address, this.gender);
    this.http.post<any>('http://localhost:8070/api/sp1/product/add', this.product).subscribe(
      response => {
        this.onLoad();
        this.modalRef?.hide();
      }
    )

  }

}
