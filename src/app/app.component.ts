import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {  QueryBuilderConfig, DataTypeParent, DataTypeChildren, DataTypeBuilder } from '../components/query-builder/query-builder.interfaces';

import { QueryBuilderService } from '../components/query-builder/query-builder.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public queryCtrl: FormControl;

  DefaultDataType: string = "AccountConfig"

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
      gender: {
        name: 'Gender',
        entity: 'physical',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string', entity: 'nonphysical'},
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!='], entity: 'nonphysical'},
      educated: {name: 'College Degree?', type: 'boolean', entity: 'nonphysical'},
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()), entity: 'nonphysical'
      },
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

    conditionQueryBuilderConfig:{
      entities: {
        clientProfile: {name: 'Client Profile'},
        carrierProfile: {name: 'Carrier Profile'},
        clientCarrierProfile: {name: 'Client Carrier Profile'},
        Invoice: {name: 'Invoice'},
        Shipment: {name: 'Shipment'},
        Uoms: {name: 'Uoms'},
        InvoiceCharges: {name: 'Invoice Charges'},
        InvoiceIDs: {name: 'Invoice IDs'},
        ClientFields: {name: 'Client Fields'},
        SIDS: {name: 'Shipment Ids'}
      },
      fields: {
        //clients here
        "Client.Code":{name: 'Ct: Client Name',type: 'category',options: [],entity:"clientProfile"},
        "Client.Region":{name: 'Ct: Client Region',type: 'category',options: [],entity:"clientProfile"},
        "Client.Country":{name: 'Ct: Client Country',type: 'category',options: [],entity:"clientProfile"},
        "Client.CTLocation":{name: 'Ct: Client City',type: 'category',options: [],entity:"clientProfile"},
        "Client.CtClientParent":{name: 'Ct: Client - Parent',type: 'category',options: [],entity:"clientProfile"},
        "Client.FullName":{name: 'Client Name',type: 'category',options: [],entity:"clientProfile"},
        "Client.Division":{name: 'Client Division',type: 'category',options: [],entity:"clientProfile"},
        "Client.SubDiv":{name: 'Client Sub Division',type: 'category',options: [],entity:"clientProfile"},
        "Client.Location":{name: 'Client Location',type: 'category',options: [],entity:"clientProfile"},
        "Client.SubLocation":{name: 'Client Sub Location',type: 'category',options: [],entity:"clientProfile"},
        "ClientId":{name: 'ClientId',type: 'category',options: [],entity:"clientProfile"},
        "Client.Address1":{name: 'Client Address1',type: 'string',options: [],entity:"clientProfile"},
        "Client.Address2":{name: 'Client Address2',type: 'string',options: [],entity:"clientProfile"},
        "Client.City":{name: 'Client City',type: 'category',options: [],entity:"clientProfile"}, 
        "Client.PostCode":{name: 'PostCode',type: 'string',options: [],entity:"clientProfile"},
        "Client.County":{name: 'County',type: 'category',options: [],entity:"clientProfile"},
        "Client.CreatedDate":{name: 'Created Date',type: 'date',options: [],entity:"clientProfile"},

        //carrier here
        "Invoice.CarrierId":{name: 'Carrier Id',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Name":{name: 'Carrier Short Name',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Title":{name: 'Carrier Full Name',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Code":{name: 'Carrier SCAC',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Region":{name: 'Carrier Region',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Country":{name: 'Carrier Country',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Location":{name: 'Carrier Payment Centre: City',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.AccountNumber": {name: 'Carrier Acc No', type: 'string',entity:"carrierProfile"},
        "Carrier.Currency":{name: 'Carrier Currency',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.SubLocation":{name: 'Carrier Operational City',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Address1":{name: 'Carrier Address1',type: 'string',options: [],entity:"carrierProfile"},
        "Carrier.Address2":{name: 'Carrier Address2',type: 'string',options: [],entity:"carrierProfile"},
        "Carrier.City":{name: 'Carrier City',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.Postcode":{name: 'Postcode',type: 'category',options: [],entity:"carrierProfile"},
        "Carrier.CreatedDate":{name: 'Carrier Created Date',type: 'date',options: [],entity:"carrierProfile"},

        //clientcarrier
        "ClientCarrier.ClientCarrierId":{name: 'ClientCarrierID',type: 'category',options: [],entity:"clientCarrierProfile"},
        "ClientCarrier.GP1":{name: 'Client Carrier Profile	GP1',type: 'category',options: [],entity:"clientCarrierProfile"},
        "ClientCarrier.GP2":{name: 'Client Carrier Profile	GP2',type: 'category',options: [],entity:"clientCarrierProfile"},
        "ClientCarrier.GoLive":{name: 'Client Carrier Profile	GoLiveDate',type: 'date',options: [],entity:"clientCarrierProfile"},
        "ClientCarrier.CreatedDate":{name: 'Client Carrier Profile	Creation Date',type: 'date',options: [],entity:"clientCarrierProfile"},

        //invoice
        "InvoiceNo": {name: 'Invoice No', type: 'string',entity:"Invoice"},
        "FreightBillDate": {name: 'Invoice Date', type: 'date',entity:"Invoice"},
        "DueDate": {name: 'Invoice	Due Date', type: 'date',entity:"Invoice"},
        "Currency": {name: 'Invoice	 Currency', type: 'category',entity:"Invoice"},
        "BilledAmount": {name: 'Invoice	 Amount', type: 'string',entity:"Invoice"},
        "InvoiceType": {name: 'Invoice	Document Type', type: 'category',options: [{name: 'Invoice', value: "100"},{name: 'Credit Note', value: "101"}],entity:"Invoice"},
        "ApprovedAmount": {name: 'Invoice	Approved Amount', type: 'string',entity:"Invoice"},
        "Status": {name: 'Invoice	Rate Status', type: 'category',entity:"Invoice"},
        "Comments": {name: 'Invoice	Auditors Comments', type: 'string',entity:"Invoice"},

        //shipment
        "InvoiceShipment.Id":{name: 'Shipment ID',type: 'string',options: [],entity:"Shipment"},
        "ShipmentClientFields":{name: 'Shipment	Client Fields',type: 'category',options: [],entity:"Shipment"}, //todo:
        "InvoiceShipment.ShipmentMode":{name: 'Shipment Mode',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.ServiceLevel":{name: 'Shipment Service Type',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.FreightTerms":{name: 'Shipment Freight Terms',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.ShipmentDate":{name: 'Shipment Date',type: 'date',options: [],entity:"Shipment"},
        "InvoiceShipment.OriginCountryCode":{name: 'Shipment Origin Country Code',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.Origin":{name: 'Shipment 	Origin State',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.OriginPostcode":{name: 'Shipment 	Origin Postcode',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.OriginCity":{name: 'Shipment 	Origin City',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.Address1":{name: 'Shipment 	Origin Address 2',type: 'string',options: [],entity:"Shipment"},
        "InvoiceShipment.Address2":{name: 'Shipment 	Origin Address 1',type: 'string',options: [],entity:"Shipment"},
        "InvoiceShipment.DestinationPostcode":{name: 'Shipment 	Destination Postcode',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.DestinationPortcode":{name: 'Shipment 	Destination Port Code',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.DestinationAddress1":{name: 'Shipment 	Destinationa Address 2',type: 'string',options: [],entity:"Shipment"},
        "InvoiceShipment.DestinationAddress2":{name: 'Shipment 	Destination Address 1',type: 'string',options: [],entity:"Shipment"},
        "InvoiceShipment.ConsigneeName":{name: 'Shipment 	Consignee Name',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.ShipmentCurrency":{name: 'Shipment 	Shipment Currency',type: 'category',options: [],entity:"Shipment"},
        "InvoiceShipment.BilledAmount":{name: 'Shipment 	Shipment Amount',type: 'string',options: [],entity:"Shipment"},
        "InvoiceShipment.InvoiceUOM.UOM.Id":{name: 'Uom Type',type: 'category',options: [],entity:"Uoms"}, 
        "InvoiceShipment.InvoiceUOM.Amount":{name: 'Invoice Value',type: 'number',options: [],entity:"Uoms"},
        "InvoiceShipment.InvoiceClientField.FieldName":{name: 'Invoice ClientField Field Name',type: 'category',options: [],entity:"ClientFields"},
        "InvoiceShipment.InvoiceAccessorial.Code":{name: 'Code',type: 'category',options: [],entity:"InvoiceCharges"},
        "InvoiceShipment.InvoiceAccessorial.Amount":{name: 'Invoice Accessorial Value',type: 'number',options: [],entity:"InvoiceCharges"},
        "InvoiceShipment.InvoiceClientField.Value":{name: 'Invoice Client Field Value',type: 'string',options: [],entity:"ClientFields"},
        "InvoiceShipment.InvoiceSID.Name":{name: 'SID Type',type: 'category',options: [],entity:"SIDS"},
        "InvoiceShipment.InvoiceSID.Value":{name: 'Invoice Value',type: 'string',options: [],entity:"SIDS"},
        "InvoiceId.Name":{name: 'InvoiceId Field Name',type: 'category',options: [],entity:"InvoiceIDs"},
        "InvoiceId.Value":{name: 'InvoiceId Field Value',type: 'inputBtn',options: [],entity:"InvoiceIDs"},
      }
    },

    fields: {
      active: {name: 'Active', type: 'boolean'},
      currency: {name: 'Currency', type: 'string'},
      overchargeamount: {name: 'OverchargeAmount', type: 'number'},

      overchargetype: {name: 'OverchargeType', type: 'string'},
      underchargeamount: {name: 'UnderchargeAmount', type: 'string'},
      underchargetype: {name: 'UnderchargeType', type: 'string'},
      runaudit: {name: 'RunAudit', type: 'boolean'},
      runtmsmatch: {name: 'RunTmsMatch', type: 'boolean'},
      savetmsmatchdata: {name: 'SaveTmsMatchData', type: 'boolean'},
      addtolerancesavings: {name: 'AddToleranceSavings', type: 'boolean'},
      runpomatch: {name: 'RunPoMatch', type: 'boolean'},

      priority: {name: 'Priority', type: 'number'},
      resultaction: {name: 'ResultAction', type: 'boolean'},
      reasoncode: {name: 'ReasonCode', type: 'boolean'},
      actioncommentstemplate: {name: 'ActionCommentsTemplate', type: 'boolean'},
      webresallocation: {name: 'WebResAllocation', type: 'boolean'},

      pdfdocumenttype: {name: 'PDFDocumentType', type: 'boolean'},
      property: {name: 'Property', type: 'string'},
      propertytype: {name: 'PropertyType', type: 'string'},
      operator: {name: 'Operator', type: 'boolean'},
      value: {name: 'Value', type: 'string'}
    }
  };

  public currentConfig: QueryBuilderConfig;
  public allowRuleset: boolean = true;
  public allowCollapse: boolean;
  public persistValueOnFieldChange: boolean = false;

 

  constructor(
    private formBuilder: FormBuilder,
    private queryS: QueryBuilderService
  ) {
    this.queryCtrl = this.formBuilder.control(this.query);
    // this.currentConfig = this.config;
    this.dataTypeBuilder = { fields: this.dataTypeParent }

    this.queryS.changeEmitted$.subscribe(data => {
      console.log(data);
    });
  }

  changeDataType( data: any)
  {
    // console.log(data);
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
