#import "RCTDeviceModule.h"

@implementation RCTDeviceModule

RCT_EXPORT_MODULE();


RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(isEmulator) {
  #if TARGET_IPHONE_SIMULATOR
    return @(YES);
  #else
    return @(NO);
  #endif
}

@end
