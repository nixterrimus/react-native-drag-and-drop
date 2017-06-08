//
//  RCTDraggableTextView.m
//  helloDnD
//
//  Created by Nicholas Rowe on 6/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "RCTDraggableTextView.h"
#import <MobileCoreServices/MobileCoreServices.h>

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
    return @[
             [[UIDragItem alloc] initWithItemProvider:itemProvider]
             ];
  } else {
    return @[];
  }
}


@end
