import { gql } from "@apollo/client";

export const GETUSER_QUERY = gql`
query getCaregivers {
  getCaregivers {
    
    user {
      _id
      id
      email
      name
      role
      # photo
      updatedAt
      createdAt
    }
  }
}

`;

export const CREATE_QUESTION_QUERY = gql`
mutation createQuestion($input:questionInput!) {
  createQuestion(input: $input) {
    status

  }
}
`

export const CREATE_INVENTORY_QUERY = gql`
mutation createInventory($input:inventoryInput!) {
  createInventory(input: $input) {
    status

  }
}
`


export const GET_SERVICE = gql`
query getService($getServiceId:String!){
    getService(id:$getServiceId){
        status
        service{
          _id
                serviceName
      assignedTo
      admin
      assignedAt
      dailyTapDoneAt
      dailyTap
      monthlyTap
      monthlyTapDoneAt
      trolleyOne{
        name
        expiryDate
        qty
      }
      trolleyTwo{
        name
        expiryDate
        qty
      }
      trolleyThree{
        name
        expiryDate
        qty
      }
      trolleyFour{
        name
        expiryDate
        qty
      }
   
      # photo
      image
        }
    }
}

`;

export const GET_DEPARTMENT_BY_ADMIN = gql`
query getDepartmentByAdmin($getDepartmentByAdmin:String!){
    getDepartmentByAdmin(email:$getDepartmentByAdmin){
        status
        department{
       departmentName
       admin
        }
    }
}`

export const GET_SERVICE_BY_ADMIN = gql`
query getServicebyAdmin($getServicebyAdmin:String!){
  getServicebyAdmin(email:$getServicebyAdmin){
        status
        services{
          _id
                serviceName
      assignedTo
      admin
      assignedAt
      dailyTapDoneAt
      dailyTap
      monthlyTap
      monthlyTapDoneAt
      trolleyOne{
        name
        expiryDate
        qty
      }
      trolleyTwo{
        name
        expiryDate
        qty
      }
      trolleyThree{
        name
        expiryDate
        qty
      }
      trolleyFour{
        name
        expiryDate
        qty
      }
      # photo
      image
        }
    }
}

`;


export const LOGIN_QUERY = gql`
mutation LoginUser($input: LoginInput!) {
  loginUser(input: $input) {
    status
    access_token
  }
}

`;

export const UPDATE_SERVICE_QUERY= gql`
mutation updateService($input:UpdateServiceInput!,$updateServiceId:String!){
  updateService(input:$input,id:$updateServiceId){
      status,
      service{
               
    assignedAt

 
      }
  }
}
`
