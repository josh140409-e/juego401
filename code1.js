gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDLarge_9595Play_9595ButtonObjects1= [];
gdjs.menuCode.GDLarge_9595Play_9595ButtonObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDLarge_9595Play_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDLarge_9595Play_9595ButtonObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDLarge_9595Play_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDLarge_9595Play_9595ButtonObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
