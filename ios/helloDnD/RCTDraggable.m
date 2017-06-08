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

@interface RCTDraggable : RCTViewManager <UIDragInteractionDelegate>
@end

@implementation RCTDraggable

RCT_EXPORT_MODULE()

- (UIView *)view
{
  UIView *draggableView = [[UIView alloc] init];
  if (@available(iOS 11.0, *)) {
    UIDragInteraction *dragInteraction = [[UIDragInteraction alloc] initWithDelegate:self];
    [draggableView addInteraction:dragInteraction];
  }
  return draggableView;
}

- (NSArray<UIDragItem *> *)dragInteraction:(UIDragInteraction *)interaction itemsForBeginningSession:(id<UIDragSession>)session {
  if (@available(iOS 11.0, *)) {
    NSString *string = @"Hello, from React Native";
    NSData *data = [string dataUsingEncoding:NSUTF8StringEncoding];
    NSItemProvider *itemProvider = [[NSItemProvider  alloc] init];
    [itemProvider
     registerDataRepresentationForTypeIdentifier:(NSString *)kUTTypePlainText
     visibility:NSItemProviderRepresentationVisibilityAll
     loadHandler:^NSProgress * _Nullable(void (^ _Nonnull completionHandler)(NSData * _Nullable, NSError * _Nullable)) {
       completionHandler(data, NULL);
       return nil;
     }];
    return @[
             [[UIDragItem alloc] initWithItemProvider:itemProvider]
             ];
  } else {
    return @[];
  }
}
@end
