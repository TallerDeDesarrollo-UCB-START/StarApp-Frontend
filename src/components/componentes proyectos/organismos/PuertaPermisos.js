//import { cloneElement } from "react";
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
    //debugger;
    const role = useGetRole();
    //console.log(role)
    const permissions = PERMISSIONS[role];

    const permissionGranted = hasPermission({ permissions, scopes });

    if (!permissionGranted) return <></>

    return <>{children}</>;
}

export default PuertaPermisos;