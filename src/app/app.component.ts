import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {  QueryBuilderConfig, DataTypeParent, DataTypeChildren, DataTypeBuilder } from '../components/query-builder/query-builder.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public queryCtrl: FormControl;

  public dataTypeParent: Array<DataTypeParent> = [
    {
      field: 'AccountConfig',
      values: [
        'InvoiceRule',
        'ShipmentRule',
        'AuditRule',
        'DuplicationRule',
        'TMSRule',
        'Condition'
      ]
    },
    {
      field: 'InvoiceRule',
      values: [
        'ValidateGoLiveDate',
        'ValidatePdfProvided',
        'ValidateField',
        'ValidateBalanceCheck',
        'CompareProperties',
        'Condition'
      ]
    },
    {
      field: 'ShipmentRule',
      values: [
        'ValidateGoLiveDate',
        'ValidateField',
        'ValidateFieldMultiple',
        'CompareProperties',
        'ValidateShipmentDate',
        'Condition'
      ]
    },
    {
      field: 'AuditRule',
      values: [
        'ValidateNoRateResult',
        'ValidateOvercharge',
        'ValidateUndercharge',
        'ValidateInvoiceOvercharge',
        'ValidateInvoiceUndercharge',
        'ValidateOverchargeIgnoreUndercharges',
        'OverrideVariance',
        'Condition'
      ]
    },
    {
      field: 'DuplicationRule',
      values: [
        'ValidateInvoiceNo',
        'ValidateSid',
        'Condition'
      ]
    },
    {
      field: 'TMSRule',
      values: [
        'ValidateNoTmsMatch',
        'ValidateTmsMatchCost',
        'ValidateTmsCarrier',
        'ValidateNoTmsValueMatch',
        'ValidateOvercharge',
        'ValidateUndercharge',
        'ValidateInvoiceOvercharge',
        'ValidateInvoiceUndercharge',
        'OVerrideVariance',
        'Condition'
      ]
    },
  ]

  public dataTypeChildren: Array<DataTypeChildren> = [
    {
      field: 'AccountConfig',
      values: [
        'Active',
        'Currency',
        'OverchargeAmount',
        'OverchargeType',
        'UnderchargeAmount',
        'UnderchargeType',
        'RunAudit',
        'RunTmsMatch',
        'SaveTmsMatchData',
        'AddToleranceSavings',
        'RunPoMatch'
      ]
    },
    {
      field:'InvoiceRule',
      values: [
        'Priority',
        'ResultAction',
        'ReasonCode',
        'ActionCommentsTemplate',
        'WebResAllocation'
      ]
    },
    {
      field: 'ShipmentRule',
      values: [
        'Priority',
        'ResultAction',
        'ReasonCode',
        'ActionCommentsTemplate',
        'WebResAllocation'
      ]
    },
    {
      field: 'AuditRule',
      values: [
        'Priority',
        'ResultAction',
        'ReasonCode',
        'ActionCommentsTemplate',
        'WebResAllocation'
      ]
    },
    {
      field: 'DuplicationRule',
      values: [
        'Priority',
        'ResultAction',
        'ReasonCode',
        'ActionCommentsTemplate',
        'WebResAllocation'
      ]
    },
    {
      field: 'TMSRule',
      values: [
        'Priority',
        'ResultAction',
        'ReasonCode',
        'ActionCommentsTemplate',
        'WebResAllocation'
      ]
    },
    {
      field: 'ValidateGoLiveDate',
      values: [
        ''
      ]
    },
    {
      field: 'ValidatePdfProvided',
      values: [
        'PdfDocumentType'
      ]
    },
    {
      field: 'ValidateField',
      values: [
        'Property',
        'PropertyType',
        'Operator',
        'Value'
      ]
    },
    {
      field: 'ValidateBalanceCheck',
      values: [
        ''
      ]
    },
    {
      field: 'CompareProperties',
      values: [
        'Property',
        'PropertyType',
        'Operator',
        'Property2',
        'PropertyType2',
        'AdjustValue'
      ]
    },
    {
      field: 'ValidateFieldMultiple',
      values: [
        'Property',
        'PropertyType',
        'Operator',
        'Value'
      ]
    },
    {
      field: 'ValidateShipmentDate',
      values: [
        'IntervalDays'
      ]
    },
    {
      field: 'ValidateNoRateResult',
      values: [
        ''
      ]
    },
    {
      field: 'ValidateOvercharge',
      values: [
        'ValidateMissingAccessorial',
        'MaxValue',
        'MaxValueVarianceType'
      ]
    },
    {
      field: 'ValidateUnderCharge',
      values: [
        'ValidateMissingAccessorial',
        'MaxValue',
        'MaxValueVarianceType'
      ]
    },
    {
      field: 'ValidateInvoiceOvercharge',
      values: [
        'ValidateMissingAccessorial',
        'MaxValue',
        'MaxValueVarianceType'
      ]
    },
    {
      field: 'ValidateInvoiceUndercharges',
      values: [
        'ValidateMissingAccessorial',
        'MaxValue',
        'MaxValueVarianceType'
      ]
    },
    {
      field: 'ValidateOverchargeIgnoreUndercharges',
      values: [
        'ValidateMissingAccessorial',
        'MaxValue',
        'MaxValueVarianceType'
      ]
    },
    {
      field: 'OverrideVariance',
      values: [
        'OverrideOverchargeAmount',
        'OverrideOverchargeVarianceType',
        'OverrideUnderchargeAmount',
        'OverrideUnderchargeVarianceType'
      ]
    },
    {
      field: 'ValidateInvoiceNo',
      values: [
        'InvoiceStatusValidateList',
        'ValidateInvoiceAmount'
      ]
    },
    {
      field: 'ValidateSid',
      values: [
        'OnlyShipmentWithValue',
        'IgnoreIfUniqueAccessorial',
        'SidIgnoreList',
        'InvoiceStatusValidateList',
        'AccessorialsToAllow'
      ]
    },
    {
      field: 'ValidateNoTmsMatch',
      values: [
        'IgnoreVat',
        'CtmsServiceName'
      ]
    },
    {
      field: 'ValidateTmsMatchCost',
      values: [
        ''
      ]
    },
    {
      field: 'ValidateTmsCarrier',
      values: [
        ''
      ]
    },
    {
      field: 'ValidateNoTmsValueMatch',
      values: [
        'Property',
        'PropertyType'
      ]
    },
    {
      field: 'Condition',
      values: [
        'As Is'
      ]
    }
  ]

  public query = {
    condition: 'and',
    rules: [
      // {field: 'age', operator: '<=', entity: 'physical'},
      // {field: 'birthday', operator: '=', value: new Date(), entity: 'nonphysical'},
      // {
      //   condition: 'or',
      //   rules: [
      //     {field: 'gender', operator: '=', entity: 'physical'},
      //     {field: 'occupation', operator: 'in', entity: 'nonphysical'},
      //     {field: 'school', operator: 'is null', entity: 'nonphysical'},
      //     {field: 'notes', operator: '=', entity: 'nonphysical'}
      //   ]
      // }
    ]
  };

  public entityConfig: QueryBuilderConfig = {
    entities: {
      physical: {name: 'Physical Attributes'},
      nonphysical: {name: 'Nonphysical Attributes'}
    },
    fields: {
      age: {name: 'Age', type: 'number', entity: 'physical'},
      gender: {name: 'Gender',entity: 'physical',type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string', entity: 'nonphysical'},
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!='], entity: 'nonphysical'},
      educated: {name: 'College Degree?', type: 'boolean', entity: 'nonphysical'},
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],defaultValue: (() => new Date()), entity: 'nonphysical'},
      school: {name: 'School', type: 'string', nullable: true, entity: 'nonphysical'},
      occupation: {
        name: 'Occupation',
        entity: 'nonphysical',
        type: 'category',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ]
      }
    }
  };

  public dataTypeBuilder: DataTypeBuilder;

  public config: QueryBuilderConfig = {
    
    fields: {
      // "Client.Code":{name: 'Active',type: 'category',options: [],entity:"accountConfig"},
      // "Client.Region":{name: 'Currency',type: 'category',options: [],entity:"accountConfig"},
      // "Client.Country":{name: 'OverchargeAmount',type: 'category',options: [],entity:"accountConfig"},
      // "Client.CTLocation":{name: 'OverchargeType',type: 'category',options: [],entity:"accountConfig"},
      // "Client.CtClientParent":{name: 'UnderchargeAmount',type: 'category',options: [],entity:"accountConfig"},
      // "Client.FullName":{name: 'UnderchargeType',type: 'category',options: [],entity:"accountConfig"},
      // "Client.Division":{name: 'RunAudit',type: 'category',options: [],entity:"accountConfig"},
      // "Client.SubDiv":{name: 'RunTmsMatch',type: 'category',options: [],entity:"accountConfig"},
      // "Client.Location":{name: 'SaveTmsMatchData',type: 'category',options: [],entity:"accountConfig"},
      // "Client.SubLocation":{name: 'AddToleranceSavings',type: 'category',options: [],entity:"accountConfig"},
      // "ClientId":{name: 'RunPoMatch',type: 'category',options: [],entity:"accountConfig"},   
    }
  };

  public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  public allowCollapse: boolean;
  public persistValueOnFieldChange: boolean = false;

  

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.queryCtrl = this.formBuilder.control(this.query);
    // this.currentConfig = this.config;
    this.dataTypeBuilder = { fields: this.dataTypeParent }

    
  }

  changeDataType( data: any)
  {
    console.log(data);
    if(data == 'AccountConfig')
    {
      this.config = {
          
      fields: {
        //Account Config
        "Client.Code":{name: 'Active',type: 'category',options: [],entity:"accountConfig"},
        "Client.Region":{name: 'Currency',type: 'category',options: [],entity:"accountConfig"},
        "Client.Country":{name: 'OverchargeAmount',type: 'category',options: [],entity:"accountConfig"},
        "Client.CTLocation":{name: 'OverchargeType',type: 'category',options: [],entity:"accountConfig"},
        "Client.CtClientParent":{name: 'UnderchargeAmount',type: 'category',options: [],entity:"accountConfig"},
        "Client.FullName":{name: 'UnderchargeType',type: 'category',options: [],entity:"accountConfig"},
        "Client.Division":{name: 'RunAudit',type: 'category',options: [],entity:"accountConfig"},
        "Client.SubDiv":{name: 'RunTmsMatch',type: 'category',options: [],entity:"accountConfig"},
        "Client.Location":{name: 'SaveTmsMatchData',type: 'category',options: [],entity:"accountConfig"},
        "Client.SubLocation":{name: 'AddToleranceSavings',type: 'category',options: [],entity:"accountConfig"},
        "ClientId":{name: 'RunPoMatch',type: 'category',options: [],entity:"accountConfig"},   
      }
    }
    }
  }
}
