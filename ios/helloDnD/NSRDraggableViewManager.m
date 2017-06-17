//
//  NSRDraggableViewManager.m
//  helloDnD
//
//  Created by Nick Rowe on 6/17/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTViewManager.h>
#import <MobileCoreServices/MobileCoreServices.h>

#import "NSRDraggableViewManager.h"
#import "NSRDraggableView.h"

@implementation NSRDraggableViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(content, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onDragBegan, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDragEnd, RCTDirectEventBlock)

- (UIView *)view
{
  UIView *draggableView = [[NSRDraggableView alloc] initWithFrame:CGRectZero];
  return draggableView;
}

@end
