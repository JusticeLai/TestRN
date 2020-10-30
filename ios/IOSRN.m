//
//  IOSRN.m
//  Test
//
//  Created by mac on 2020/10/28.
//

#import "IOSRN.h"
#import <React/RCTLog.h>

@implementation IOSRN

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(addEvent:(NSString *)name
                  location:(NSString *)location
                  success:(RCTPromiseResolveBlock)success
                  fail:(RCTPromiseRejectBlock)fail
                  )
{
  NSLog(@"调用原生代码成功");
  NSLog(@"RN传过来的值:%@ %@",name,location);
  
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    // 在这里执行长时间的操作
    NSArray  *array = @[@"第一个",@"第二个"];
    if (array) {
      success(array);
    } else {
      NSError *error = [[NSError alloc]init];
      fail(@"no_events", @"There were no events", error);
    }
  });
}

@end
