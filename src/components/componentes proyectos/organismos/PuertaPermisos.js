//import { cloneElement } from "react";
import React from "react";
import { PERMISSIONS } from "./map-permisos.js";
import useGetRole from "./useGetRole";
const hasPermission = ({ permissions, scopes }) => {
    const scopesMap = {};
    scopes.forEach((scope) => {
        scopesMap[scope] = true;
    });
    return permissions.some((permission) => scopesMap[permission]);
};

function PuertaPermisos({children, scopes = []}) {
    try{
        const role = useGetRole();
        //console.log(role)
        const permissions = PERMISSIONS[role];

        const permissionGranted = permissions? hasPermission({ permissions, scopes }) : false //Validacion para evitar errores
        if (!permissionGranted) return <></>
            return <>{children}</>;
    }catch(error){
        console.log(error);
    }
}

export default PuertaPermisos;