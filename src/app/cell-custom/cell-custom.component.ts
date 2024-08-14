import { Component, TemplateRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
// import { ICellRendererParams} from "@ag-grid-community/core";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrl: './cell-custom.component.scss'
})
export class CellCustomComponent implements ICellRendererAngularComp {
  modalRef: BsModalRef | undefined;


  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private app: AppComponent
  ) { }
  closeResult: string = "";
  data: any;
  params: any;
  agInit(params: any): void {
    this.data = params;
    this.params = params;
  }
  refresh(params: any): boolean {
    return false;

  }
  ngOnInit(): void {

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
  updateProduct() {
    console.log("99999999999999" + JSON.stringify(this.params.data));
    this.http.put<any>('http://localhost:8070/api/sp1/product/update', this.params.data).subscribe(
      response => {
        this.app.onLoad();
        this.modalRef?.hide();
      }
    )

  }
  deleteProduct(){
    console.log("99999999999999" + JSON.stringify(this.params.data));
    this.http.delete<any>('http://localhost:8070/api/sp1/product/delete/' + this.params.data.id).subscribe(
      response => {
        this.app.onLoad();
        this.modalRef?.hide();
      }
    )
  }

}
