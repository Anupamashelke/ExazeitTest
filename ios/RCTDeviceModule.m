//
//  RCTDeviceModule.m
//  ExazeitTest
//
//  Created by Anupama Mote on 09/01/22.
//

#import "RCTDeviceModule.h"

@implementation RCTDeviceModule

RCT_EXPORT_MODULE(RCTDeviceModule);


RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(isEmulator) {
  #if TARGET_IPHONE_SIMULATOR
    return @(YES);
  #else
    return @(NO);
  #endif
}

@end

