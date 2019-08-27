import http from './http'
export async function getTableList(params = {}) {
    return await http.get('http://10.172.246.227:8095/prefectureLevelCityService/prefectureLevelCityApi/getSubsystemList?sign=uCCTwJVv.p0_ECZR.1RJjFFzPMxIYJ_Hm9tqNj5fs3dKUtufDCZoAXQwRncROEdJnCxQjkrxxS_SfA09XVkeOg--___1559615474499___8000400001___8000400001___8000400001___2___', params)
}