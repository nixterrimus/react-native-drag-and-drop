//
//  RCTDraggableTextView.h
//  helloDnD
//
//  Created by Nicholas Rowe on 6/8/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@interface RCTDraggableTextView : UIView
@property (nonatomic, strong) NSDictionary *content;
@property (nonatomic, copy) RCTDirectEventBlock onDragBegan;
@property (nonatomic, copy) RCTDirectEventBlock onDragEnd;
@end
