// 导入axios实例
import httpRequest from '../utils/request'

interface childTagList{
    tagName:string
}

// 定义接口的传参
interface createTagParam {
	tagName: string,
	belongBookId: number,
    isAddBudget:number,
    isAddStatistics:number,
    textColor:string | 'red',
    bgColor:string | 'black',
    pid:number,
    childTagList:childTagList[]
}

// 获取用户信息
export function createTag(param: createTagParam) {
    return httpRequest({
		url: '/createTag',
		method: 'post',
		data: param,
	})
}
