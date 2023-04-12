import type { RouteRecordRaw } from "vue-router";
import searchModules from "@/helpers/searchModules";

// Import routeSetting.ts from all page directories.
const routeSettings = import.meta.glob('../pages/**/routeSetting.ts', { eager: true, import: 'default' });

export function createRouterRecordArray(): Array<RouteRecordRaw> {

  // Get array of PageComponent path list
  const pageComponentPaths = searchModules(import.meta.glob('../pages/**/PageComponent.vue'));

  // The Final Object
  const routeRecords: Array<RouteRecordRaw> = [];

  // Iterate for each paths of page components.
  pageComponentPaths.forEach((path) => {
    const componentName = path.split('.').slice(-2)[0].split('/').slice(-2)[0]

    const routeSetting = routeSettings[`../pages/${componentName}/routeSetting.ts`] as PageRouteSetting;
  
    const record = {
      name: componentName,
      path: routeSetting.uri,
      alias: routeSetting.alias || [],
      component: () => import(`../pages/${componentName}/PageComponent.vue`),
    };

    routeRecords.push(record);
    console.log(` - CREATED ROUTE RECORD [${record.name as string}] for '${record.path as string}'`);
  })

  return routeRecords
}

export const pageRouterRecords = createRouterRecordArray();