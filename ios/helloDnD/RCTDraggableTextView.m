//
//  RCTDraggableTextView.m
//  helloDnD
//
//  Created by Nicholas Rowe on 6/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RCTDraggableTextView.h"
#import <MobileCoreServices/MobileCoreServices.h>
#import <React/UIView+React.h>
#import <React/RCTRootView.h>

@interface RCTDraggableTextView() <UIDragInteractionDelegate>
@end


@implementation RCTDraggableTextView

- (instancetype)initWithFrame:(CGRect)frame {
  self = [super initWithFrame:frame];
  if (self){
    if (@available(iOS 11.0, *)) {
      UIDragInteraction *dragInteraction = [[UIDragInteraction alloc] initWithDelegate:self];
      [self addInteraction:dragInteraction];
    }
  }
  return self;
}

- (NSArray<UIDragItem *> *)dragInteraction:(UIDragInteraction *)interaction itemsForBeginningSession:(id<UIDragSession>)session {
  if (@available(iOS 11.0, *)) {
    NSString *string = self.content;
    NSData *data = [string dataUsingEncoding:NSUTF8StringEncoding];
    NSItemProvider *itemProvider = [[NSItemProvider  alloc] init];
    [itemProvider
     registerDataRepresentationForTypeIdentifier:(NSString *)kUTTypePlainText
     visibility:NSItemProviderRepresentationVisibilityAll
     loadHandler:^NSProgress * _Nullable(void (^ _Nonnull completionHandler)(NSData * _Nullable, NSError * _Nullable)) {
       completionHandler(data, NULL);
       return nil;
     }];

    // When we've determined that there's a touch, cancel what RN is doing
    [self cancelCurrentReactTouch];

    return @[
             [[UIDragItem alloc] initWithItemProvider:itemProvider]
             ];
  } else {
    return @[];
  }
}

// Technique from Wix's interactable library
- (void)cancelCurrentReactTouch
{
  RCTRootView *view = [self getRootView];
  if (view != nil)
  {
    [(RCTRootView*)view cancelTouches];
  }
}

- (RCTRootView*)getRootView
{
  UIView *view = self;
  while (view.superview != nil)
  {
    view = view.superview;
    if ([view isKindOfClass:[RCTRootView class]]) break;
  }

  if ([view isKindOfClass:[RCTRootView class]])
  {
    return (RCTRootView*)view;
  }
  return nil;
}


@end
