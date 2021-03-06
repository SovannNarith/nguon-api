import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from "@angular/material/checkbox";
@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatMenuModule,
        MatPseudoCheckboxModule,
        MatCheckboxModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        MatMenuModule,
        MatPseudoCheckboxModule,
        MatCheckboxModule
    ]
})

export class MaterialModule{}