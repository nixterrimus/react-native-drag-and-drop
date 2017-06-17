//
//  RCTDraggableTextView.m
//  helloDnD
//
//  Created by Nicholas Rowe on 6/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "NSRDraggableView.h"
#import <MobileCoreServices/MobileCoreServices.h>
#import <React/UIView+React.h>
#import <React/RCTRootView.h>

@interface NSRDraggableView() <UIDragInteractionDelegate>
@end


@implementation NSRDraggableView

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

- (UITargetedDragPreview *)dragInteraction:(UIDragInteraction *)interaction previewForLiftingItem:(UIDragItem *)item session:(id<UIDragSession>)session {
  UIDragPreviewParameters *params = [[UIDragPreviewParameters alloc] init];
  params.backgroundColor = [UIColor clearColor];
  return [[UITargetedDragPreview alloc] initWithView:self parameters: params];
}

- (NSItemProvider *)itemForSharing:(NSDictionary *)content {
  if (@available(iOS 11.0, *)) {
    // Sharing Text
    if (content[@"text"]){
      NSString *string = content[@"text"];
      NSItemProvider *itemProvider = [[NSItemProvider alloc]initWithObject:string];
      return itemProvider;
    }

    // Sharing URLs
    else if (content[@"uri"]){
      NSURL *url = [[NSURL alloc] initWithString:content[@"uri"]];
      NSItemProvider *itemProvider = [[NSItemProvider alloc]initWithObject:url];
      return itemProvider;
    }

    // Sharing Something else, not possible
    else {
      return nil;
    }
  } else {
    return nil;
  }
}

- (void)dragInteraction:(UIDragInteraction *)interaction sessionWillBegin:(id<UIDragSession>)session {
  if (self.onDragBegan){
    self.onDragBegan(@{});
  }
}

- (void)dragInteraction:(UIDragInteraction *)interaction session:(id<UIDragSession>)session didEndWithOperation:(UIDropOperation)operation {
  if (self.onDragEnd){
    self.onDragEnd(@{});
  }
}

- (UITargetedDragPreview *)dragInteraction:(UIDragInteraction *)interaction previewForCancellingItem:(UIDragItem *)item withDefault:(UITargetedDragPreview *)defaultPreview {
  return defaultPreview;
}

- (NSArray<UIDragItem *> *)dragInteraction:(UIDragInteraction *)interaction itemsForBeginningSession:(id<UIDragSession>)session {
  if (@available(iOS 11.0, *)) {
    NSMutableArray *dragItems = [[NSMutableArray alloc] initWithCapacity:self.content.count];
    
    for (NSDictionary *itemContent in self.content){
      NSItemProvider * itemProvider = [self itemForSharing:itemContent];
      UIDragItem *dragItem = [[UIDragItem alloc] initWithItemProvider:itemProvider];
      [dragItems addObject:dragItem];
    }

    if (dragItems.count > 0){
      [self cancelCurrentReactTouch];
      return dragItems;
    } else {
      return @[];
    }
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
