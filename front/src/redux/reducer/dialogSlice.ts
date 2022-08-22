import {createSlice} from "@reduxjs/toolkit";
// import {Employee} from "../../domain/employee";
// import {UPDATE_TYPE} from "../../helpers/enum/updateType";

// type EditingEmployeeModalState = {
//   isEditEmployeeModalOpened: boolean;
//   employeeToEdit: Employee | null;
//   editType?: UPDATE_TYPE
// }
//
export type DialogState = {
  // editingEmp: EditingEmployeeModalState;
}

export const initialDialogState: DialogState = {
  editingEmp: {
    isEditEmployeeModalOpened: false,
    employeeToEdit: null,
  }
}

const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialDialogState,
  reducers: {
    //   changeEditEmployeeDialogFlag: (state, action: PayloadAction<EditingEmployeeModalState>) => {
    //     state.editingEmp.isEditEmployeeModalOpened = action.payload.isEditEmployeeModalOpened;
    //     state.editingEmp.employeeToEdit = action.payload.employeeToEdit;
    //     if (action.payload.editType !== undefined) {
    //       state.editingEmp.editType = action.payload.editType;
    //     }
    //   },
  }
});

export const {
  // changeEditEmployeeDialogFlag
} = dialogSlice.actions;

export default dialogSlice.reducer;