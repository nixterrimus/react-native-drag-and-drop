//
//  RCTDraggable.m
//  helloDnD
//
//  Created by Nicholas Rowe on 6/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>
#import <MobileCoreServices/MobileCoreServices.h>
#import "RCTDraggableTextView.h"

@interface RCTDraggable : RCTViewManager
@end

@implementation RCTDraggable

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(content, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onDragBegan, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onDragEnd, RCTDirectEventBlock)

- (UIView *)view
{
  UIView *draggableView = [[RCTDraggableTextView alloc] initWithFrame:CGRectZero];
  return draggableView;
}

@end
