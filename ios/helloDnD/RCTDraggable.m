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

- (UIView *)view
{
  UIView *draggableView = [[RCTDraggableTextView alloc] initWithFrame:CGRectZero];
  return draggableView;
}

@end
