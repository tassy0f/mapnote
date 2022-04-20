import { Component, OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { DialogService } from "../../../../dialog.service"
import { Coordinates } from "../../../../domain/coordinates"
import { firstValueFrom } from "rxjs"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(0, Validators.min(1)),
    description: new FormControl('# Заголовок 1 \n\n## Заголовок 2'),
    tags: new FormControl([ "Паб", "Бар", "Гастропаб", "Ресторан" ]),
    photos: new FormControl([])
  })

  constructor(private dialogService: DialogService, private httpClient: HttpClient) {
  }

  public ngOnInit(): void {
  }

  public onClickCancelButton(): void {
    this.form.reset()
    this.dialogService.isShowCreateOrEditDialog = false
  }

  public onClickSaveButton(): void {
    if (this.form.invalid) {
      alert("Форма не валидна")
      return
    }

    const formValue = this.form.value
    const latlng = this.dialogService.isCurrentEditLatLng
    const coordinates: Coordinates = {
      latitude: latlng.lat,
      longitude: latlng.lng
    }
    firstValueFrom(this.httpClient.post(`http://localhost:3000/places`, { ...formValue, coordinates: coordinates })).then(console.log)
  }
}
