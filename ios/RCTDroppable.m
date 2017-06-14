//
//  RCTDroppable.m
//  helloDnD
//
//  Created by Nicholas Rowe on 6/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>
#import <MobileCoreServices/MobileCoreServices.h>
#import "RCTDraggableTextView.h"

@interface RCTDroppable : RCTViewManager<UIDropInteractionDelegate>
@end

@implementation RCTDroppable

RCT_EXPORT_MODULE()


- (UIView *)view
{
  UIView *droppableView = [[UIView alloc] initWithFrame:CGRectZero];
  droppableView.userInteractionEnabled = true;
  UIDropInteraction *dropInteraction = [[UIDropInteraction alloc] initWithDelegate:self];
  [droppableView addInteraction:dropInteraction];
  return droppableView;
}

- (BOOL)dropInteraction:(UIDropInteraction *)interaction canHandleSession:(id<UIDropSession>)session {
  return true;
}

- (UIDropProposal *)dropInteraction:(UIDropInteraction *)interaction sessionDidUpdate:(id<UIDropSession>)session {
  return [[UIDropProposal alloc] initWithDropOperation:UIDropOperationCopy];
}

- (void)dropInteraction:(UIDropInteraction *)interaction performDrop:(id<UIDropSession>)session {
  NSLog(@"Dropping now...");
}
@end
