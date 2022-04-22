import React from "react";

const EmployeeContext = React.createContext();

const EmployeeProvider = EmployeeContext.Provider;
const EmployeeCunsumer = EmployeeContext.Consumer;

export { EmployeeProvider, EmployeeCunsumer }