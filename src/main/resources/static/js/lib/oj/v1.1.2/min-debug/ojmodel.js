/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise"], function($oj$$1$$, $$$$1$$) {
  $oj$$1$$.$Events$ = window.oj.Events = {on:function $window$oj$Events$on$($eventType$$11$$, $callback$$59$$, $context$$5$$) {
    return this.$OnInternal$($eventType$$11$$, $callback$$59$$, $context$$5$$, !1, !1);
  }, off:function $window$oj$Events$off$($eventType$$12$$, $callback$$60$$, $context$$6$$) {
    return this.$_offInternal$($eventType$$12$$, $callback$$60$$, $context$$6$$, !1);
  }, trigger:function $window$oj$Events$trigger$($eventType$$13$$) {
    var $args$$13$$ = Array.prototype.slice.call(arguments);
    $args$$13$$.unshift(!1);
    return $oj$$1$$.$Events$.$TriggerInternal$.apply(this, $args$$13$$);
  }, once:function $window$oj$Events$once$($eventType$$14$$, $callback$$61$$, $context$$7$$) {
    return this.$_onceInternal$($eventType$$14$$, $callback$$61$$, $context$$7$$, !1, null);
  }, listenTo:function $window$oj$Events$listenTo$($otherObj$$, $eventArray_eventType$$15$$, $callback$$62_e$$13$$) {
    var $event$$3_eventString$$, $attr$$, $listenerObj$$, $prop$$9$$, $eventMap$$ = {};
    $eventArray_eventType$$15$$.constructor === String ? $eventMap$$[$eventArray_eventType$$15$$] = $callback$$62_e$$13$$ : $eventMap$$ = $eventArray_eventType$$15$$;
    for ($prop$$9$$ in $eventMap$$) {
      if ($eventMap$$.hasOwnProperty($prop$$9$$)) {
        for ($eventArray_eventType$$15$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$9$$), $callback$$62_e$$13$$ = 0;$callback$$62_e$$13$$ < $eventArray_eventType$$15$$.length;$callback$$62_e$$13$$ += 1) {
          $event$$3_eventString$$ = $eventArray_eventType$$15$$[$callback$$62_e$$13$$].event, $attr$$ = $eventArray_eventType$$15$$[$callback$$62_e$$13$$].$attribute$, $listenerObj$$ = {event:$event$$3_eventString$$, $attribute$:$attr$$, object:$otherObj$$, $callback$:$eventMap$$[$prop$$9$$]}, this.$_checkForHandler$(this._listeningTo, $listenerObj$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$3_eventString$$ = $attr$$ ? $event$$3_eventString$$ + ":" + $attr$$ : $event$$3_eventString$$, void 0 === 
          this._listeningTo && (this._listeningTo = []), this._listeningTo.push($listenerObj$$), $otherObj$$.$OnInternal$($event$$3_eventString$$, $eventMap$$[$prop$$9$$], null, !0, !1);
        }
      }
    }
    return this;
  }, listenToOnce:function $window$oj$Events$listenToOnce$($otherObj$$1$$, $eventArray$$1_eventType$$16$$, $callback$$63_e$$14$$) {
    var $event$$4_eventString$$1$$, $attr$$1$$, $listenerObj$$1$$, $prop$$10$$, $eventMap$$1$$ = {};
    $eventArray$$1_eventType$$16$$.constructor === String ? $eventMap$$1$$[$eventArray$$1_eventType$$16$$] = $callback$$63_e$$14$$ : $eventMap$$1$$ = $eventArray$$1_eventType$$16$$;
    for ($prop$$10$$ in $eventMap$$1$$) {
      if ($eventMap$$1$$.hasOwnProperty($prop$$10$$)) {
        for ($eventArray$$1_eventType$$16$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$10$$), $callback$$63_e$$14$$ = 0;$callback$$63_e$$14$$ < $eventArray$$1_eventType$$16$$.length;$callback$$63_e$$14$$ += 1) {
          $event$$4_eventString$$1$$ = $eventArray$$1_eventType$$16$$[$callback$$63_e$$14$$].event, $attr$$1$$ = $eventArray$$1_eventType$$16$$[$callback$$63_e$$14$$].$attribute$, $listenerObj$$1$$ = {event:$event$$4_eventString$$1$$, $attribute$:$attr$$1$$, object:$otherObj$$1$$, $callback$:$eventMap$$1$$[$prop$$10$$]}, this.$_checkForHandler$(this._listeningTo, $listenerObj$$1$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$4_eventString$$1$$ = $attr$$1$$ ? $event$$4_eventString$$1$$ + ":" + 
          $attr$$1$$ : $event$$4_eventString$$1$$, void 0 === this._listeningTo && (this._listeningTo = []), this._listeningTo.push($listenerObj$$1$$), $otherObj$$1$$.$_onceInternal$($event$$4_eventString$$1$$, $eventMap$$1$$[$prop$$10$$], null, !0, this);
        }
      }
    }
    return this;
  }, stopListening:function $window$oj$Events$stopListening$($otherObj$$2$$, $eventType$$17$$, $callback$$64$$) {
    var $actualType_eventArray$$2$$, $eventMap$$2$$ = {}, $e$$15$$, $oneEvent$$, $oneAttr$$, $attrEqual_event$$5$$, $cb_objEqual$$, $eventEqual_len$$, $callbackEqual$$, $i$$17$$, $prop$$11$$;
    if (null == arguments || 1 >= arguments.length) {
      $eventEqual_len$$ = this._listeningTo ? this._listeningTo.length : 0;
      for ($i$$17$$ = 0;$i$$17$$ < $eventEqual_len$$;$i$$17$$++) {
        if ($attrEqual_event$$5$$ = this._listeningTo[$i$$17$$], $cb_objEqual$$ = $otherObj$$2$$ ? $otherObj$$2$$ === $attrEqual_event$$5$$.object : !0) {
          $cb_objEqual$$ = $attrEqual_event$$5$$.object.$_offInternal$, $cb_objEqual$$.apply($attrEqual_event$$5$$.object, [$attrEqual_event$$5$$.event, $attrEqual_event$$5$$.$callback$, $attrEqual_event$$5$$.context, !0]);
        }
      }
      this._listeningTo = [];
      return this;
    }
    $actualType_eventArray$$2$$ = $eventType$$17$$;
    $otherObj$$2$$ && $otherObj$$2$$.constructor === String && ($actualType_eventArray$$2$$ = $otherObj$$2$$);
    $actualType_eventArray$$2$$.constructor === String ? $eventMap$$2$$[$actualType_eventArray$$2$$] = $callback$$64$$ : $eventMap$$2$$ = $actualType_eventArray$$2$$;
    for ($prop$$11$$ in $eventMap$$2$$) {
      if ($eventMap$$2$$.hasOwnProperty($prop$$11$$)) {
        for ($actualType_eventArray$$2$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$11$$), $e$$15$$ = 0;$e$$15$$ < $actualType_eventArray$$2$$.length;$e$$15$$ += 1) {
          for ($oneEvent$$ = $actualType_eventArray$$2$$[$e$$15$$].event, $oneAttr$$ = $actualType_eventArray$$2$$[$e$$15$$].$attribute$, $eventEqual_len$$ = this._listeningTo ? this._listeningTo.length : 0, $i$$17$$ = $eventEqual_len$$ - 1;0 <= $i$$17$$;$i$$17$$ -= 1) {
            $attrEqual_event$$5$$ = this._listeningTo[$i$$17$$], $cb_objEqual$$ = $otherObj$$2$$ ? $otherObj$$2$$ === $attrEqual_event$$5$$.object : !0, $eventEqual_len$$ = $oneEvent$$ ? $oneEvent$$ === $attrEqual_event$$5$$.event : !0, $callbackEqual$$ = $callback$$64$$ ? $eventMap$$2$$[$prop$$11$$] === $attrEqual_event$$5$$.$callback$ : !0, $attrEqual_event$$5$$ = $oneAttr$$ ? $oneAttr$$ === $attrEqual_event$$5$$.$attribute$ : !0, $cb_objEqual$$ && $eventEqual_len$$ && $callbackEqual$$ && $attrEqual_event$$5$$ && 
            ($cb_objEqual$$ = this._listeningTo[$i$$17$$].object.$_offInternal$, $cb_objEqual$$.apply(this._listeningTo[$i$$17$$].object, [this._listeningTo[$i$$17$$].event, this._listeningTo[$i$$17$$].$callback$, this._listeningTo[$i$$17$$].context, !0]), this._listeningTo.splice($i$$17$$, 1));
          }
        }
      }
    }
    return this;
  }};
  $oj$$1$$.$Events$.bind = $oj$$1$$.$Events$.on;
  $oj$$1$$.$Events$.unbind = $oj$$1$$.$Events$.off;
  $oj$$1$$.$Events$.$EventType$ = {ADD:"add", ALLADDED:"alladded", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", DESTROY:"destroy", ALLREMOVED:"allremoved", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", READY:"ready", ALL:"all"};
  $goog$exportPath_$$("Events.EventType", $oj$$1$$.$Events$.$EventType$, $oj$$1$$);
  $oj$$1$$.$Events$.$Mixin$ = function $$oj$$1$$$$Events$$$Mixin$$($myClass$$, $source$$6$$) {
    var $methodName$$1$$, $obj$$43$$ = $source$$6$$ || this;
    for ($methodName$$1$$ in $obj$$43$$) {
      "function" === typeof $obj$$43$$[$methodName$$1$$] && ($myClass$$[$methodName$$1$$] = $obj$$43$$[$methodName$$1$$]);
    }
    $myClass$$.$eventHandlers$ = {};
    $myClass$$._listeningTo = [];
  };
  $oj$$1$$.$Events$.$_onceInternal$ = function $$oj$$1$$$$Events$$$_onceInternal$$($eventArray$$3_eventType$$18$$, $callback$$65_e$$16$$, $context$$8$$, $listenTo$$, $otherObj$$3$$) {
    var $event$$6$$, $attr$$2$$, $eventMap$$3$$, $prop$$12$$;
    $eventMap$$3$$ = this.$_getEventMap$($eventArray$$3_eventType$$18$$, $callback$$65_e$$16$$);
    for ($prop$$12$$ in $eventMap$$3$$) {
      if ($eventMap$$3$$.hasOwnProperty($prop$$12$$)) {
        for ($eventArray$$3_eventType$$18$$ = this.$_getEvents$($prop$$12$$), $callback$$65_e$$16$$ = 0;$callback$$65_e$$16$$ < $eventArray$$3_eventType$$18$$.length;$callback$$65_e$$16$$ += 1) {
          $event$$6$$ = $eventArray$$3_eventType$$18$$[$callback$$65_e$$16$$].event, $attr$$2$$ = $eventArray$$3_eventType$$18$$[$callback$$65_e$$16$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$6$$] && (this.$eventHandlers$[$event$$6$$] = []), this.$eventHandlers$[$event$$6$$].push({$callback$:$eventMap$$3$$[$prop$$12$$], context:$context$$8$$, $attribute$:$attr$$2$$, $once$:!0, fired:!1, $listen$:$listenTo$$, $otherObj$:$otherObj$$3$$})
          ;
        }
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$_shouldFire$ = function $$oj$$1$$$$Events$$$_shouldFire$$($handler$$42$$) {
    return $handler$$42$$.$once$ ? $handler$$42$$.fired ? !1 : $handler$$42$$.fired = !0 : !0;
  };
  $oj$$1$$.$Events$.$_getContext$ = function $$oj$$1$$$$Events$$$_getContext$$($obj$$44$$, $handler$$43$$) {
    return $handler$$43$$.context || $handler$$43$$.$otherObj$ || $obj$$44$$;
  };
  $oj$$1$$.$Events$.$TriggerInternal$ = function $$oj$$1$$$$Events$$$TriggerInternal$$($silent$$, $eventType$$19$$) {
    var $eventArray$$4_handlers$$1$$ = this.$_getEvents$($eventType$$19$$), $e$$17$$, $event$$7_i$$18$$, $args$$14_attr$$3$$, $eventsToFire$$, $allHandlers$$, $callback$$66$$;
    $eventsToFire$$ = [];
    for ($e$$17$$ = 0;$e$$17$$ < $eventArray$$4_handlers$$1$$.length;$e$$17$$ += 1) {
      $event$$7_i$$18$$ = $eventArray$$4_handlers$$1$$[$e$$17$$].event, $args$$14_attr$$3$$ = $eventArray$$4_handlers$$1$$[$e$$17$$].$attribute$, $eventsToFire$$.push({event:$event$$7_i$$18$$, $attribute$:$args$$14_attr$$3$$});
    }
    for ($e$$17$$ = 0;$e$$17$$ < $eventsToFire$$.length;$e$$17$$ += 1) {
      $allHandlers$$ = this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL);
      $eventArray$$4_handlers$$1$$ = $oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$17$$].event, !1);
      for ($event$$7_i$$18$$ = 0;$event$$7_i$$18$$ < ($eventArray$$4_handlers$$1$$ ? $eventArray$$4_handlers$$1$$.length : 0);$event$$7_i$$18$$ += 1) {
        $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$attribute$ === $eventsToFire$$[$e$$17$$].$attribute$ && $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$callback$ && ($args$$14_attr$$3$$ = Array.prototype.slice.call(arguments), $eventArray$$4_handlers$$1$$ && $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$] && $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$once$ && (this.$_removeHandler$($oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$17$$].event, !0), $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$]), 
        $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$otherObj$ && $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$otherObj$.stopListening(this, $eventType$$19$$, $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$callback$)), $eventArray$$4_handlers$$1$$ && $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$] && this.$_shouldFire$($eventArray$$4_handlers$$1$$[$event$$7_i$$18$$]) && ($callback$$66$$ = $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$callback$, $silent$$ && !$eventArray$$4_handlers$$1$$[$event$$7_i$$18$$].$ignoreSilent$ || 
        $callback$$66$$.apply($oj$$1$$.$Events$.$_getContext$(this, $eventArray$$4_handlers$$1$$[$event$$7_i$$18$$]), $args$$14_attr$$3$$.slice(2))));
      }
      for ($event$$7_i$$18$$ = 0;$event$$7_i$$18$$ < ($allHandlers$$ ? $allHandlers$$.length : 0);$event$$7_i$$18$$ += 1) {
        $args$$14_attr$$3$$ = Array.prototype.slice.call(arguments), 0 < $args$$14_attr$$3$$.length && ($args$$14_attr$$3$$[1] = $eventsToFire$$[$e$$17$$].$attribute$ ? $eventsToFire$$[$e$$17$$].event + ":" + $eventsToFire$$[$e$$17$$].$attribute$ : $eventsToFire$$[$e$$17$$].event), $allHandlers$$ && $allHandlers$$[$event$$7_i$$18$$] && $allHandlers$$[$event$$7_i$$18$$].$callback$ && this.$_shouldFire$($allHandlers$$[$event$$7_i$$18$$]) && ($callback$$66$$ = $allHandlers$$[$event$$7_i$$18$$].$callback$, 
        $silent$$ && !$allHandlers$$[$event$$7_i$$18$$].$ignoreSilent$ || $callback$$66$$.apply($oj$$1$$.$Events$.$_getContext$(this, $allHandlers$$[$event$$7_i$$18$$]), $args$$14_attr$$3$$.slice(1))), $allHandlers$$ && $allHandlers$$[$event$$7_i$$18$$] && $allHandlers$$[$event$$7_i$$18$$].$once$ && (this.$_removeHandler$(this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL, !0), $allHandlers$$[$event$$7_i$$18$$]), $allHandlers$$[$event$$7_i$$18$$].$otherObj$ && $allHandlers$$[$event$$7_i$$18$$].$otherObj$.stopListening(this, 
        $oj$$1$$.$Events$.$EventType$.ALL, $allHandlers$$[$event$$7_i$$18$$].$callback$));
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$OnInternal$ = function $$oj$$1$$$$Events$$$OnInternal$$($eventMap$$4_eventType$$20$$, $callback$$67_eventArray$$5$$, $context$$9$$, $listenTo$$1$$, $ignoreSilent$$) {
    var $prop$$13$$, $i$$19$$, $event$$8$$, $attr$$4_eventObj$$;
    $eventMap$$4_eventType$$20$$ = this.$_getEventMap$($eventMap$$4_eventType$$20$$, $callback$$67_eventArray$$5$$);
    for ($prop$$13$$ in $eventMap$$4_eventType$$20$$) {
      if ($eventMap$$4_eventType$$20$$.hasOwnProperty($prop$$13$$)) {
        for ($callback$$67_eventArray$$5$$ = this.$_getEvents$($prop$$13$$), $i$$19$$ = 0;$i$$19$$ < $callback$$67_eventArray$$5$$.length;$i$$19$$ += 1) {
          $event$$8$$ = $callback$$67_eventArray$$5$$[$i$$19$$].event, $attr$$4_eventObj$$ = $callback$$67_eventArray$$5$$[$i$$19$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$8$$] && (this.$eventHandlers$[$event$$8$$] = []), $attr$$4_eventObj$$ = {$callback$:$eventMap$$4_eventType$$20$$[$prop$$13$$], context:$context$$9$$, $attribute$:$attr$$4_eventObj$$, $listen$:$listenTo$$1$$, $ignoreSilent$:$ignoreSilent$$}, -1 === this.$_checkForHandler$(this.$eventHandlers$[$event$$8$$], 
          $attr$$4_eventObj$$, $oj$$1$$.$Events$.$_handlersIdentical$) && this.$eventHandlers$[$event$$8$$].push($attr$$4_eventObj$$);
        }
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$_offInternal$ = function $$oj$$1$$$$Events$$$_offInternal$$($eventType$$21$$, $callback$$68$$, $context$$10$$, $listen$$) {
    var $eventMap$$5$$, $prop$$14$$;
    if (null == arguments || 0 == arguments.length) {
      return this.$eventHandlers$ = {}, this;
    }
    if (null == $eventType$$21$$) {
      return this.$_removeEvent$($eventType$$21$$, $callback$$68$$, $context$$10$$, $listen$$), this;
    }
    $eventMap$$5$$ = this.$_getEventMap$($eventType$$21$$, $callback$$68$$);
    for ($prop$$14$$ in $eventMap$$5$$) {
      $eventMap$$5$$.hasOwnProperty($prop$$14$$) && this.$_removeEvent$($prop$$14$$, $eventMap$$5$$[$prop$$14$$], $context$$10$$, $listen$$);
    }
    return this;
  };
  $oj$$1$$.$Events$.$_getEventMap$ = function $$oj$$1$$$$Events$$$_getEventMap$$($eventType$$22$$, $callback$$69$$) {
    var $eventMap$$6$$ = {};
    $eventType$$22$$.constructor === String ? $eventMap$$6$$[$eventType$$22$$] = $callback$$69$$ : $eventMap$$6$$ = $eventType$$22$$;
    return $eventMap$$6$$;
  };
  $oj$$1$$.$Events$.$_removeEvent$ = function $$oj$$1$$$$Events$$$_removeEvent$$($e$$18_eventType$$23$$, $callback$$70$$, $context$$12$$, $listen$$1$$) {
    var $eventArray$$6$$ = [], $i$$20$$, $event$$9$$, $attr$$5$$, $handlers$$2$$, $callbacks$$2$$, $contexts$$, $attrs$$, $listenEq$$;
    if ($e$$18_eventType$$23$$) {
      $eventArray$$6$$ = $oj$$1$$.$Events$.$_getEvents$($e$$18_eventType$$23$$);
    } else {
      if (void 0 !== this.$eventHandlers$) {
        for ($event$$9$$ in this.$eventHandlers$) {
          this.$eventHandlers$.hasOwnProperty($event$$9$$) && $eventArray$$6$$.push({event:$event$$9$$});
        }
      }
    }
    for ($e$$18_eventType$$23$$ = 0;$e$$18_eventType$$23$$ < $eventArray$$6$$.length;$e$$18_eventType$$23$$ += 1) {
      if ($event$$9$$ = $eventArray$$6$$[$e$$18_eventType$$23$$].event, $attr$$5$$ = $eventArray$$6$$[$e$$18_eventType$$23$$].$attribute$, void 0 !== this.$eventHandlers$ && this.$eventHandlers$[$event$$9$$] instanceof Array) {
        $handlers$$2$$ = this.$eventHandlers$[$event$$9$$];
        for ($i$$20$$ = $handlers$$2$$.length - 1;0 <= $i$$20$$;$i$$20$$ -= 1) {
          $callbacks$$2$$ = void 0 === $callback$$70$$ || null === $callback$$70$$ || $handlers$$2$$[$i$$20$$].$callback$ == $callback$$70$$, $contexts$$ = void 0 === $context$$12$$ || null === $context$$12$$ || $handlers$$2$$[$i$$20$$].context == $context$$12$$, $attrs$$ = void 0 === $attr$$5$$ || null === $attr$$5$$ || $handlers$$2$$[$i$$20$$].$attribute$ == $attr$$5$$, $listenEq$$ = void 0 === $listen$$1$$ || null === $listen$$1$$ || $handlers$$2$$[$i$$20$$].$listen$ == $listen$$1$$, $callbacks$$2$$ && 
          $contexts$$ && $attrs$$ && $listenEq$$ && $handlers$$2$$.splice($i$$20$$, 1);
        }
        0 === $handlers$$2$$.length && delete this.$eventHandlers$[$event$$9$$];
      }
    }
  };
  $oj$$1$$.$Events$.$_removeHandler$ = function $$oj$$1$$$$Events$$$_removeHandler$$($handlers$$3$$, $handler$$44$$) {
    var $i$$21$$, $callbacks$$3$$, $contexts$$1$$, $attrs$$1$$, $listenEq$$1$$, $onceEq$$;
    if ($handlers$$3$$) {
      for ($i$$21$$ = $handlers$$3$$.length - 1;0 <= $i$$21$$;$i$$21$$ -= 1) {
        $callbacks$$3$$ = void 0 === $handler$$44$$.$callback$ || null === $handler$$44$$.$callback$ || $handlers$$3$$[$i$$21$$].$callback$ == $handler$$44$$.$callback$, $contexts$$1$$ = void 0 === $handler$$44$$.context || null === $handler$$44$$.context || $handlers$$3$$[$i$$21$$].context == $handler$$44$$.context, $attrs$$1$$ = void 0 === $handler$$44$$.$attribute$ || null === $handler$$44$$.$attribute$ || $handlers$$3$$[$i$$21$$].$attribute$ == $handler$$44$$.$attribute$, $listenEq$$1$$ = void 0 === 
        $handler$$44$$.$listen$ || null === $handler$$44$$.$listen$ || $handlers$$3$$[$i$$21$$].$listen$ == $handler$$44$$.$listen$, $onceEq$$ = void 0 === $handler$$44$$.$once$ || null === $handler$$44$$.$once$ || $handlers$$3$$[$i$$21$$].$once$ == $handler$$44$$.$once$, $callbacks$$3$$ && $contexts$$1$$ && $attrs$$1$$ && $listenEq$$1$$ && $onceEq$$ && $handlers$$3$$.splice($i$$21$$, 1);
      }
    }
  };
  $oj$$1$$.$Events$.$_getEvents$ = function $$oj$$1$$$$Events$$$_getEvents$$($eventList_eventString$$2$$) {
    $eventList_eventString$$2$$ = $eventList_eventString$$2$$ ? $eventList_eventString$$2$$.split(" ") : [];
    var $retList$$ = [], $i$$22$$, $attr$$6_eventWithAttr$$, $name$$64$$;
    for ($i$$22$$ = 0;$i$$22$$ < $eventList_eventString$$2$$.length;$i$$22$$ += 1) {
      $attr$$6_eventWithAttr$$ = $eventList_eventString$$2$$[$i$$22$$].split(":"), $name$$64$$ = $attr$$6_eventWithAttr$$[0], $attr$$6_eventWithAttr$$ = 1 < $attr$$6_eventWithAttr$$.length ? $attr$$6_eventWithAttr$$[1] : null, $retList$$.push({event:$name$$64$$, $attribute$:$attr$$6_eventWithAttr$$});
    }
    return $retList$$;
  };
  $oj$$1$$.$Events$.$_handlersIdentical$ = function $$oj$$1$$$$Events$$$_handlersIdentical$$($handler1$$, $handler2$$) {
    return $handler1$$.$callback$ === $handler2$$.$callback$ && $handler1$$.$attribute$ === $handler2$$.$attribute$ && $handler1$$.context === $handler2$$.context && $handler1$$.$listen$ === $handler2$$.$listen$ && $handler1$$.$once$ === $handler2$$.$once$;
  };
  $oj$$1$$.$Events$.$_listenersIdentical$ = function $$oj$$1$$$$Events$$$_listenersIdentical$$($listener1$$, $listener2$$) {
    return $listener1$$.event === $listener2$$.event && $listener1$$.$attribute$ === $listener2$$.$attribute$ && $listener1$$.context === $listener2$$.context && $listener1$$.object === $listener2$$.object;
  };
  $oj$$1$$.$Events$.$_checkForHandler$ = function $$oj$$1$$$$Events$$$_checkForHandler$$($handlerList$$, $handler$$45$$, $handlerTest$$) {
    var $i$$23$$;
    if (void 0 === $handlerList$$) {
      return-1;
    }
    for ($i$$23$$ = 0;$i$$23$$ < $handlerList$$.length;$i$$23$$ += 1) {
      if ($handlerTest$$($handlerList$$[$i$$23$$], $handler$$45$$)) {
        return $i$$23$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Events$.$_getHandlers$ = function $$oj$$1$$$$Events$$$_getHandlers$$($handlers$$4$$, $eventType$$24$$, $handlerReturn_original$$1$$) {
    if ($handlers$$4$$ && $handlers$$4$$[$eventType$$24$$] instanceof Array) {
      if ($handlerReturn_original$$1$$) {
        return $handlers$$4$$[$eventType$$24$$];
      }
      $handlerReturn_original$$1$$ = [];
      var $i$$24$$;
      for ($i$$24$$ = 0;$i$$24$$ < $handlers$$4$$[$eventType$$24$$].length;$i$$24$$++) {
        $handlerReturn_original$$1$$.push($handlers$$4$$[$eventType$$24$$][$i$$24$$]);
      }
      return $handlerReturn_original$$1$$;
    }
    return null;
  };
  $oj$$1$$.$URLError$ = function $$oj$$1$$$$URLError$$() {
    this.name = "URLError";
    this.message = "No URL defined";
  };
  $goog$exportPath_$$("URLError", $oj$$1$$.$URLError$, $oj$$1$$);
  $oj$$1$$.$URLError$.prototype = Error();
  $oj$$1$$.$URLError$.constructor = $oj$$1$$.$URLError$;
  $oj$$1$$.$Model$ = function $$oj$$1$$$$Model$$($attributes$$, $options$$16$$) {
    $oj$$1$$.$Model$._init(this, $attributes$$, $options$$16$$, null);
  };
  $goog$exportPath_$$("Model", $oj$$1$$.$Model$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Model$, $oj$$1$$.$Object$, "oj.Model");
  $oj$$1$$.$Model$.prototype.Init = function $$oj$$1$$$$Model$$$Init$() {
    $oj$$1$$.$Model$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$Model$.prototype.attributes = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.attributes", {attributes:$oj$$1$$.$Model$.prototype.attributes});
  $oj$$1$$.$Model$.prototype.$defaults$ = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.defaults", {$defaults$:$oj$$1$$.$Model$.prototype.$defaults$});
  $oj$$1$$.$Model$.prototype.id = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.id", {id:$oj$$1$$.$Model$.prototype.id});
  $oj$$1$$.$Model$.prototype.$idAttribute$ = "id";
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.idAttribute", {$idAttribute$:$oj$$1$$.$Model$.prototype.$idAttribute$});
  $oj$$1$$.$Model$.prototype.$urlRoot$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.urlRoot", {$urlRoot$:$oj$$1$$.$Model$.prototype.$urlRoot$});
  $oj$$1$$.$Model$.prototype.$customURL$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.customURL", {$customURL$:$oj$$1$$.$Model$.prototype.$customURL$});
  $oj$$1$$.$Model$.$_idCount$ = 0;
  $oj$$1$$.$Model$._init = function $$oj$$1$$$$Model$$_init$($model$$1$$, $attributes$$1$$, $options$$17$$, $parse_properties$$3$$) {
    var $prop$$15$$ = null, $attrCopy$$;
    if (!$oj$$1$$.$Model$.$_justExtending$) {
      $model$$1$$.Init();
      $oj$$1$$.$Events$.$Mixin$($model$$1$$);
      $model$$1$$.$_clearChanged$();
      $model$$1$$.$previousAttrs$ = {};
      $model$$1$$.$nestedSet$ = !1;
      $model$$1$$.index = -1;
      $options$$17$$ = $options$$17$$ || {};
      $model$$1$$.attributes = {};
      $model$$1$$.defaults && !$options$$17$$.$ignoreDefaults$ && ($model$$1$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$($$$$1$$.isFunction($model$$1$$.defaults) ? $model$$1$$.defaults() : $model$$1$$.defaults, null));
      for ($prop$$15$$ in $parse_properties$$3$$) {
        $parse_properties$$3$$.hasOwnProperty($prop$$15$$) && ($model$$1$$[$prop$$15$$] = $parse_properties$$3$$[$prop$$15$$]);
      }
      if ($attributes$$1$$) {
        if ($parse_properties$$3$$ = $options$$17$$.parse, $$$$1$$.isFunction($parse_properties$$3$$) && ($model$$1$$.parse = $parse_properties$$3$$), $attrCopy$$ = $oj$$1$$.$Model$.$_cloneAttributes$($attributes$$1$$, $model$$1$$.attributes), $attrCopy$$ = $parse_properties$$3$$ ? $model$$1$$.parse($attrCopy$$) : $attrCopy$$, null == $attrCopy$$ || void 0 === $attrCopy$$) {
          $model$$1$$.attributes = {};
        } else {
          for ($prop$$15$$ in $attrCopy$$) {
            $attrCopy$$.hasOwnProperty($prop$$15$$) && $model$$1$$.$_setProp$($prop$$15$$, $attrCopy$$[$prop$$15$$], !1, !1, $options$$17$$);
          }
        }
      }
      $model$$1$$.$SetCid$();
      $model$$1$$.$SetCollection$($options$$17$$.collection);
      $options$$17$$.customURL && ($model$$1$$.customURL = $options$$17$$.customURL);
      $options$$17$$.url && ($model$$1$$.url = $options$$17$$.url);
      $options$$17$$.urlRoot && ($model$$1$$.urlRoot = $options$$17$$.urlRoot);
      $model$$1$$.initialize && $model$$1$$.initialize($attributes$$1$$, $options$$17$$);
      $model$$1$$.$SetupId$();
    }
  };
  $oj$$1$$.$Model$.extend = function $$oj$$1$$$$Model$$extend$($properties$$4$$, $classProperties$$) {
    $oj$$1$$.$Model$.$_justExtending$ = !0;
    var $obj$$45$$, $prop$$16$$;
    $obj$$45$$ = new $oj$$1$$.$Model$;
    $oj$$1$$.$Model$.$_justExtending$ = !1;
    $$$$1$$.extend($obj$$45$$, this.prototype);
    $properties$$4$$ = $properties$$4$$ || {};
    for ($prop$$16$$ in $properties$$4$$) {
      $properties$$4$$.hasOwnProperty($prop$$16$$) && ($obj$$45$$[$prop$$16$$] = $properties$$4$$[$prop$$16$$]);
    }
    var $Model$$;
    $Model$$ = $properties$$4$$ && $properties$$4$$.constructor && $properties$$4$$.hasOwnProperty("constructor") ? $properties$$4$$.constructor : function($attributes$$2$$, $options$$18$$) {
      $oj$$1$$.$Model$._init(this, $attributes$$2$$, $options$$18$$, $properties$$4$$);
    };
    $$$$1$$.extend($Model$$, this);
    $Model$$.prototype = $obj$$45$$;
    $Model$$.extend = $oj$$1$$.$Model$.extend;
    $Model$$.prototype.constructor = $Model$$;
    $oj$$1$$.$Events$.$Mixin$($Model$$, this);
    if ($classProperties$$) {
      for ($prop$$16$$ in $classProperties$$) {
        $classProperties$$.hasOwnProperty($prop$$16$$) && ($Model$$[$prop$$16$$] = $classProperties$$[$prop$$16$$]);
      }
    }
    return $Model$$;
  };
  $goog$exportPath_$$("Model.extend", $oj$$1$$.$Model$.extend, $oj$$1$$);
  $oj$$1$$.$Model$.prototype.$TriggerInternal$ = function $$oj$$1$$$$Model$$$$TriggerInternal$$() {
  };
  $oj$$1$$.$Model$.prototype.$SetCid$ = function $$oj$$1$$$$Model$$$$SetCid$$() {
    this.$GetCid$() || (this.cid = "id" + $oj$$1$$.$Model$.$_idCount$, $oj$$1$$.$Model$.$_idCount$ += 1);
  };
  $oj$$1$$.$Model$.prototype.$GetCid$ = function $$oj$$1$$$$Model$$$$GetCid$$() {
    return this.cid;
  };
  $oj$$1$$.$Model$.prototype.$SetIndex$ = function $$oj$$1$$$$Model$$$$SetIndex$$($index$$49$$) {
    this.index = $index$$49$$;
  };
  $oj$$1$$.$Model$.prototype.$GetIndex$ = function $$oj$$1$$$$Model$$$$GetIndex$$() {
    return this.index;
  };
  $oj$$1$$.$Model$.prototype.$SetNext$ = function $$oj$$1$$$$Model$$$$SetNext$$($model$$2$$) {
    this.$nextModel$ = $model$$2$$;
  };
  $oj$$1$$.$Model$.prototype.$SetPrevious$ = function $$oj$$1$$$$Model$$$$SetPrevious$$($model$$3$$) {
    var $retVal$$1$$ = this.$previousModel$;
    this.$previousModel$ = $model$$3$$;
    return $retVal$$1$$;
  };
  $oj$$1$$.$Model$.prototype.$Merge$ = function $$oj$$1$$$$Model$$$$Merge$$($model$$4$$, $comparator$$, $silent$$2$$) {
    var $prop$$17$$, $needSort$$ = !1, $isStringComparator$$ = $oj$$1$$.$StringUtils$.$isString$($comparator$$), $valueChange$$, $changes$$ = !1;
    for ($prop$$17$$ in $model$$4$$.attributes) {
      $model$$4$$.attributes.hasOwnProperty($prop$$17$$) && ($valueChange$$ = this.attributes[$prop$$17$$] != $model$$4$$.attributes[$prop$$17$$], $isStringComparator$$ ? $prop$$17$$ === $comparator$$ && $valueChange$$ && ($needSort$$ = !0) : $valueChange$$ && ($needSort$$ = !0), $valueChange$$ && ($changes$$ = !0, this.attributes[$prop$$17$$] = $model$$4$$.attributes[$prop$$17$$], this.$_addChange$($prop$$17$$, $model$$4$$.attributes[$prop$$17$$]), this.$_fireAttrChange$($prop$$17$$, this.attributes[$prop$$17$$], 
      null, $silent$$2$$)));
    }
    this.$SetupId$();
    $changes$$ && this.$_fireChange$(null, $silent$$2$$);
    return $needSort$$;
  };
  $oj$$1$$.$Model$.$_hasProperties$ = function $$oj$$1$$$$Model$$$_hasProperties$$($object$$4$$) {
    var $prop$$18$$;
    if ($object$$4$$ && $object$$4$$ instanceof Object) {
      for ($prop$$18$$ in $object$$4$$) {
        if ($object$$4$$.hasOwnProperty($prop$$18$$)) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$1$$.$Model$.prototype.$SetCollection$ = function $$oj$$1$$$$Model$$$$SetCollection$$($coll$$) {
    null == $coll$$ ? delete this.collection : (this.collection = $coll$$, this.$SetupId$());
  };
  $oj$$1$$.$Model$.prototype.$GetCollection$ = function $$oj$$1$$$$Model$$$$GetCollection$$() {
    return this.collection;
  };
  $oj$$1$$.$Model$.prototype.$_fireAttrChange$ = function $$oj$$1$$$$Model$$$$_fireAttrChange$$($prop$$19$$, $value$$57$$, $options$$20$$, $silent$$3$$) {
    null != $prop$$19$$ && this.$TriggerInternal$($silent$$3$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$19$$, this, $value$$57$$, $options$$20$$);
  };
  $oj$$1$$.$Model$.prototype.$_fireChange$ = function $$oj$$1$$$$Model$$$$_fireChange$$($options$$21$$, $silent$$4$$) {
    this.$TriggerInternal$($silent$$4$$, $oj$$1$$.$Events$.$EventType$.CHANGE, this, $options$$21$$, null);
  };
  $oj$$1$$.$Model$.prototype.$SetupId$ = function $$oj$$1$$$$Model$$$$SetupId$$() {
    var $id$$2_idAttr$$1_modFunc$$ = null;
    this.collection && this.collection.modelId && ($id$$2_idAttr$$1_modFunc$$ = this.collection.modelId, $id$$2_idAttr$$1_modFunc$$ = $$$$1$$.isFunction($id$$2_idAttr$$1_modFunc$$) ? $id$$2_idAttr$$1_modFunc$$.call(this.collection, this.attributes) : $id$$2_idAttr$$1_modFunc$$);
    $id$$2_idAttr$$1_modFunc$$ || ($id$$2_idAttr$$1_modFunc$$ = this.$_getIdAttr$(), $id$$2_idAttr$$1_modFunc$$ = null != this.attributes ? this.attributes[$id$$2_idAttr$$1_modFunc$$] : null);
    this.id = $id$$2_idAttr$$1_modFunc$$;
  };
  $oj$$1$$.$Model$.prototype.$_setPropInternal$ = function $$oj$$1$$$$Model$$$$_setPropInternal$$($prop$$20$$, $value$$58$$, $copyRegardless$$) {
    var $equality$$ = $oj$$1$$.$Object$.$__innerEquals$(this.attributes[$prop$$20$$], $value$$58$$);
    return $copyRegardless$$ || !$equality$$ ? (this.attributes[$prop$$20$$] = $value$$58$$, this.$SetupId$(), !$equality$$) : !1;
  };
  $oj$$1$$.$Model$.prototype.$_clearChanged$ = function $$oj$$1$$$$Model$$$$_clearChanged$$() {
    this.changed = {};
  };
  $oj$$1$$.$Model$.prototype.$_addChange$ = function $$oj$$1$$$$Model$$$$_addChange$$($property$$4$$, $value$$59$$) {
    this.changed[$property$$4$$] = $value$$59$$;
  };
  $oj$$1$$.$Model$.prototype.$_setProp$ = function $$oj$$1$$$$Model$$$$_setProp$$($opts_prop$$21$$, $value$$60$$, $copyRegardless$$1_silent$$5$$, $propertyBag$$, $options$$22$$) {
    if (null == $opts_prop$$21$$) {
      return!0;
    }
    var $attrs$$2$$ = {}, $p$$, $isNested$$ = this.$nestedSet$;
    if ($propertyBag$$) {
      for ($p$$ in $opts_prop$$21$$) {
        $opts_prop$$21$$.hasOwnProperty($p$$) && ($attrs$$2$$[$p$$] = $opts_prop$$21$$[$p$$]);
      }
    } else {
      $attrs$$2$$[$opts_prop$$21$$] = $value$$60$$;
    }
    $opts_prop$$21$$ = $options$$22$$ || {};
    if (!this.$_checkValid$($attrs$$2$$, {validate:$opts_prop$$21$$.validate}, !1)) {
      return!1;
    }
    $isNested$$ || (this.$_clearChanged$(), this.$changes$ = []);
    this.$nestedSet$ || (this.$previousAttrs$ = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null));
    this.$nestedSet$ = !0;
    for ($p$$ in $attrs$$2$$) {
      $attrs$$2$$.hasOwnProperty($p$$) && (this.$_setPropInternal$($p$$, $attrs$$2$$[$p$$], $copyRegardless$$1_silent$$5$$) ? (this.$_addChange$($p$$, $attrs$$2$$[$p$$]), this.$changes$.push($p$$)) : delete $attrs$$2$$[$p$$]);
    }
    $copyRegardless$$1_silent$$5$$ = $opts_prop$$21$$.silent;
    for ($p$$ in $attrs$$2$$) {
      $attrs$$2$$.hasOwnProperty($p$$) && (!$copyRegardless$$1_silent$$5$$ && (0 < this.$changes$.length || $isNested$$ && -1 === this.$changes$.indexOf($p$$)) && (this.$pendingChanges$ = !0, this.$pendingOpts$ = $opts_prop$$21$$), this.$_fireAttrChange$($p$$, $attrs$$2$$[$p$$], $opts_prop$$21$$, $copyRegardless$$1_silent$$5$$));
    }
    if ($isNested$$) {
      return!0;
    }
    if (!$copyRegardless$$1_silent$$5$$ && !$isNested$$) {
      for (;this.$pendingChanges$;) {
        this.$pendingChanges$ = !1, this.$_fireChange$(this.$pendingOpts$, $copyRegardless$$1_silent$$5$$);
      }
    }
    this.$nestedSet$ = !1;
    return!0;
  };
  $oj$$1$$.$Model$.prototype.clear = function $$oj$$1$$$$Model$$$clear$($options$$23$$) {
    var $prop$$22$$, $unsetOpt$$ = {silent:!0}, $silent$$6$$;
    $options$$23$$ = $options$$23$$ || {};
    $silent$$6$$ = $options$$23$$.silent;
    $unsetOpt$$.validate = $options$$23$$.validate;
    this.$_clearChanged$();
    for ($prop$$22$$ in this.attributes) {
      if (this.attributes.hasOwnProperty($prop$$22$$)) {
        if (!this.$_unsetInternal$($prop$$22$$, $unsetOpt$$, !0)) {
          return!1;
        }
        this.$TriggerInternal$($silent$$6$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$22$$, this, void 0, null);
      }
    }
    this.attributes = {};
    this.$SetupId$();
    this.$_fireAttrChange$(null, null, null, $silent$$6$$);
    this.$_fireChange$(null, $silent$$6$$);
    return this;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clear", {clear:$oj$$1$$.$Model$.prototype.clear});
  $oj$$1$$.$Model$.$_cloneAttributes$ = function $$oj$$1$$$$Model$$$_cloneAttributes$$($oldData$$, $newData$$) {
    $newData$$ = $newData$$ || {};
    for (var $prop$$23$$ in $oldData$$) {
      $newData$$.hasOwnProperty($prop$$23$$) && $oldData$$.hasOwnProperty($prop$$23$$) && void 0 === $oldData$$[$prop$$23$$] && delete $oldData$$[$prop$$23$$];
    }
    $oj$$1$$.$CollectionUtils$.$copyInto$($newData$$, $oldData$$, void 0, !0, 1E4);
    return $newData$$;
  };
  $oj$$1$$.$Model$.prototype.clone = function $$oj$$1$$$$Model$$$clone$() {
    var $c$$23$$ = new this.constructor, $prop$$24$$;
    for ($prop$$24$$ in this) {
      this.hasOwnProperty($prop$$24$$) && this[$prop$$24$$] !== this.attributes && ($c$$23$$[$prop$$24$$] = this[$prop$$24$$]);
    }
    $c$$23$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null);
    delete $c$$23$$.cid;
    $c$$23$$.$SetCid$();
    $c$$23$$.$SetupId$();
    return $c$$23$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clone", {clone:$oj$$1$$.$Model$.prototype.clone});
  $oj$$1$$.$Model$.prototype.$Match$ = function $$oj$$1$$$$Model$$$$Match$$($id$$3$$, $cid$$) {
    var $modCid_modId$$ = this.$GetId$();
    if (void 0 !== $modCid_modId$$ && $modCid_modId$$ == $id$$3$$) {
      return!0;
    }
    $modCid_modId$$ = this.cid;
    return void 0 !== $modCid_modId$$ && $modCid_modId$$ == $cid$$ ? !0 : !1;
  };
  $oj$$1$$.$Model$.prototype.set = function $$oj$$1$$$$Model$$$set$($property$$5$$, $value$$61$$, $options$$24$$) {
    var $opts$$1$$ = $options$$24$$ || {}, $ignoreLastArg$$ = !1, $i$$25_prop$$25$$, $valid$$ = !0;
    if (arguments && 0 < arguments.length) {
      if (1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$ = !0, $opts$$1$$ = arguments[arguments.length - 1] || {}), $oj$$1$$.$Model$.$_hasProperties$($property$$5$$)) {
        if ($opts$$1$$.unset) {
          for ($i$$25_prop$$25$$ in $property$$5$$) {
            $property$$5$$.hasOwnProperty($i$$25_prop$$25$$) && this.$_unsetInternal$($i$$25_prop$$25$$, null, !1);
          }
        } else {
          this.$_setProp$($property$$5$$, null, !0, !0, $opts$$1$$) || ($valid$$ = !1);
        }
      } else {
        for ($i$$25_prop$$25$$ = 0;$i$$25_prop$$25$$ < arguments.length;$i$$25_prop$$25$$ += 2) {
          if (void 0 !== arguments[$i$$25_prop$$25$$] || $i$$25_prop$$25$$ < arguments.length - 1 || !$ignoreLastArg$$ && $i$$25_prop$$25$$ === arguments.length - 1) {
            $opts$$1$$.unset ? this.$_unsetInternal$(arguments[$i$$25_prop$$25$$], null, !1) : this.$_setProp$(arguments[$i$$25_prop$$25$$], arguments[$i$$25_prop$$25$$ + 1], !1, !1, $opts$$1$$) || ($valid$$ = !1);
          }
        }
      }
    }
    return $valid$$ ? this : !1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.set", {set:$oj$$1$$.$Model$.prototype.set});
  $oj$$1$$.$Model$.prototype.$unset$ = function $$oj$$1$$$$Model$$$$unset$$($property$$6$$, $options$$25$$) {
    return this.$_unsetInternal$($property$$6$$, $options$$25$$, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.unset", {$unset$:$oj$$1$$.$Model$.prototype.$unset$});
  $oj$$1$$.$Model$.prototype.$_unsetInternal$ = function $$oj$$1$$$$Model$$$$_unsetInternal$$($property$$7$$, $options$$26$$, $clear$$) {
    $options$$26$$ = $options$$26$$ || {};
    var $silent$$7$$ = $options$$26$$.silent, $attrs$$3$$ = {};
    if (this.has($property$$7$$)) {
      if (!this.$_checkValid$($attrs$$3$$, $options$$26$$, !1)) {
        return!1;
      }
      $clear$$ || this.$_clearChanged$();
      delete this.attributes[$property$$7$$];
      this.$_addChange$($property$$7$$, void 0);
      this.$_fireAttrChange$($property$$7$$, null, null, $silent$$7$$);
      this.$_fireChange$(null, $silent$$7$$);
    }
    this.$SetupId$();
    return!0;
  };
  $oj$$1$$.$Model$.prototype.get = function $$oj$$1$$$$Model$$$get$($property$$8$$) {
    return this.attributes[$property$$8$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.get", {get:$oj$$1$$.$Model$.prototype.get});
  $oj$$1$$.$Model$.prototype.has = function $$oj$$1$$$$Model$$$has$($property$$9$$) {
    return $oj$$1$$.$Collection$.$_defined$(this.attributes[$property$$9$$]);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.has", {has:$oj$$1$$.$Model$.prototype.has});
  $oj$$1$$.$Model$.prototype.fetch = function $$oj$$1$$$$Model$$$fetch$($options$$27$$) {
    $options$$27$$ = $options$$27$$ || {};
    var $success$$8$$ = $options$$27$$.success, $userErr$$ = $options$$27$$.error, $self$$1$$ = this, $opts$$2$$;
    $opts$$2$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$27$$);
    $opts$$2$$.error = function $$opts$$2$$$error$($xhr$$, $status$$, $err$$) {
      $oj$$1$$.$Model$.$_triggerError$($self$$1$$, !1, $options$$27$$, $status$$, $err$$, $xhr$$);
      $userErr$$ && $userErr$$.apply($self$$1$$, arguments);
    };
    $opts$$2$$.success = function $$opts$$2$$$success$($response$$) {
      $opts$$2$$.xhr && ($options$$27$$.xhr = $opts$$2$$.xhr);
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$1$$, $response$$, $opts$$2$$);
      $$$$1$$.isFunction($self$$1$$.parse) && $self$$1$$.set($self$$1$$.parse($response$$), $opts$$2$$);
      $success$$8$$ && $success$$8$$.call($self$$1$$, this, $response$$, $options$$27$$);
    };
    $oj$$1$$.$Model$.$_internalSync$("read", this, $opts$$2$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.fetch", {fetch:$oj$$1$$.$Model$.prototype.fetch});
  $oj$$1$$.$Model$.prototype.parse = function $$oj$$1$$$$Model$$$parse$($rawData$$) {
    return $rawData$$;
  };
  $oj$$1$$.$Model$.prototype.url = function $$oj$$1$$$$Model$$$url$() {
    var $coll$$2_collUrl_urlRoot$$ = this.$_getUrlRoot$(), $id$$4_slash$$ = this.$GetId$();
    if ($coll$$2_collUrl_urlRoot$$) {
      return $id$$4_slash$$ ? $coll$$2_collUrl_urlRoot$$ + "/" + encodeURIComponent($id$$4_slash$$) : $coll$$2_collUrl_urlRoot$$;
    }
    if ($coll$$2_collUrl_urlRoot$$ = this.collection) {
      return $coll$$2_collUrl_urlRoot$$ = $oj$$1$$.$Model$.$GetPropValue$($coll$$2_collUrl_urlRoot$$, "url"), $id$$4_slash$$ && $coll$$2_collUrl_urlRoot$$ ? ($id$$4_slash$$ = "/" == $oj$$1$$.$Model$.$_getLastChar$($coll$$2_collUrl_urlRoot$$) ? "" : "/", $coll$$2_collUrl_urlRoot$$ + $id$$4_slash$$ + encodeURIComponent(this.$GetId$())) : $coll$$2_collUrl_urlRoot$$;
    }
    throw new $oj$$1$$.$URLError$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.url", {url:$oj$$1$$.$Model$.prototype.url});
  $oj$$1$$.$Model$.prototype.keys = function $$oj$$1$$$$Model$$$keys$() {
    var $prop$$26$$, $retArray$$ = [];
    for ($prop$$26$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$26$$) && $retArray$$.push($prop$$26$$);
    }
    return $retArray$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.keys", {keys:$oj$$1$$.$Model$.prototype.keys});
  $oj$$1$$.$Model$.prototype.$values$ = function $$oj$$1$$$$Model$$$$values$$() {
    var $prop$$27$$, $retArray$$1$$ = [];
    for ($prop$$27$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$27$$) && $retArray$$1$$.push(this.get($prop$$27$$));
    }
    return $retArray$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.values", {$values$:$oj$$1$$.$Model$.prototype.$values$});
  $oj$$1$$.$Model$.prototype.$pairs$ = function $$oj$$1$$$$Model$$$$pairs$$() {
    var $prop$$28$$, $retObj$$ = [], $item$$;
    for ($prop$$28$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$28$$) && ($item$$ = [], $item$$.push($prop$$28$$), $item$$.push(this.get($prop$$28$$)), $retObj$$.push($item$$));
    }
    return $retObj$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pairs", {$pairs$:$oj$$1$$.$Model$.prototype.$pairs$});
  $oj$$1$$.$Model$.prototype.$omit$ = function $$oj$$1$$$$Model$$$$omit$$($keys$$2$$) {
    var $keyArr$$ = [], $i$$26$$, $prop$$29$$, $retObj$$1$$ = {};
    if ($keys$$2$$ instanceof Array) {
      $keyArr$$ = $keys$$2$$;
    } else {
      for ($i$$26$$ = 0;$i$$26$$ < arguments.length;$i$$26$$++) {
        $keyArr$$.push(arguments[$i$$26$$]);
      }
    }
    for ($prop$$29$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$29$$) && -1 == $keyArr$$.indexOf($prop$$29$$) && ($retObj$$1$$[$prop$$29$$] = this.get($prop$$29$$));
    }
    return $retObj$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.omit", {$omit$:$oj$$1$$.$Model$.prototype.$omit$});
  $oj$$1$$.$Model$.prototype.$pick$ = function $$oj$$1$$$$Model$$$$pick$$($keys$$3$$) {
    var $keyArr$$1$$ = [], $i$$27$$, $retObj$$2$$ = {};
    if ($keys$$3$$ instanceof Array) {
      $keyArr$$1$$ = $keys$$3$$;
    } else {
      for ($i$$27$$ = 0;$i$$27$$ < arguments.length;$i$$27$$++) {
        $keyArr$$1$$.push(arguments[$i$$27$$]);
      }
    }
    for ($i$$27$$ = 0;$i$$27$$ < $keyArr$$1$$.length;$i$$27$$++) {
      this.attributes.hasOwnProperty($keyArr$$1$$[$i$$27$$]) && ($retObj$$2$$[$keyArr$$1$$[$i$$27$$]] = this.get($keyArr$$1$$[$i$$27$$]));
    }
    return $retObj$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pick", {$pick$:$oj$$1$$.$Model$.prototype.$pick$});
  $oj$$1$$.$Model$.prototype.$invert$ = function $$oj$$1$$$$Model$$$$invert$$() {
    var $prop$$30$$, $retObj$$3$$ = {}, $val$$14$$;
    for ($prop$$30$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$30$$) && ($val$$14$$ = this.get($prop$$30$$), $retObj$$3$$[$val$$14$$] = $prop$$30$$);
    }
    return $retObj$$3$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.invert", {$invert$:$oj$$1$$.$Model$.prototype.$invert$});
  $oj$$1$$.$Model$.$_getLastChar$ = function $$oj$$1$$$$Model$$$_getLastChar$$($str$$11$$) {
    return $str$$11$$.charAt($str$$11$$.length - 1);
  };
  $oj$$1$$.$Model$.prototype.$_saveUrl$ = function $$oj$$1$$$$Model$$$$_saveUrl$$() {
    var $urlRoot$$1$$ = this.$_getUrlRoot$();
    return $urlRoot$$1$$ ? $urlRoot$$1$$ : this.$GetCollection$() ? this.$GetCollection$().url : null;
  };
  $oj$$1$$.$Model$.prototype.$_getUrlRoot$ = function $$oj$$1$$$$Model$$$$_getUrlRoot$$() {
    return $oj$$1$$.$Model$.$GetPropValue$(this, "urlRoot");
  };
  $oj$$1$$.$Model$.prototype.parseSave = function $$oj$$1$$$$Model$$$parseSave$($modelData$$) {
    return $modelData$$;
  };
  $oj$$1$$.$Model$.prototype.isValid = function $$oj$$1$$$$Model$$$isValid$() {
    var $options$$28$$ = {};
    $options$$28$$.validate = this.validate;
    return this.$_checkValid$(this.attributes, $options$$28$$, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isValid", {isValid:$oj$$1$$.$Model$.prototype.isValid});
  $oj$$1$$.$Model$.$_isValidateSet$ = function $$oj$$1$$$$Model$$$_isValidateSet$$($options$$29$$, $save$$) {
    $options$$29$$ = $options$$29$$ || {};
    return void 0 !== $options$$29$$.validate && null !== $options$$29$$.validate ? $options$$29$$.validate : $save$$;
  };
  $oj$$1$$.$Model$.prototype.$_checkValid$ = function $$oj$$1$$$$Model$$$$_checkValid$$($attributes$$3$$, $options$$30$$, $save$$1$$) {
    $options$$30$$ = $options$$30$$ || {};
    var $validate$$ = this.validate;
    return $validate$$ && $oj$$1$$.$Model$.$_isValidateSet$($options$$30$$, $save$$1$$) && (this.validationError = $validate$$.call(this, $attributes$$3$$, $options$$30$$)) ? (this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, this, this.validationError, $options$$30$$), !1) : !0;
  };
  $oj$$1$$.$Model$.$_processArgs$ = function $$oj$$1$$$$Model$$$_processArgs$$($args$$15$$) {
    var $ignoreLastArg$$1$$ = !1, $options$$31$$ = {}, $i$$28_prop$$31$$, $attributes$$4$$ = {};
    if ($args$$15$$ && 0 < $args$$15$$.length) {
      1 < $args$$15$$.length && $args$$15$$[$args$$15$$.length - 1] && $oj$$1$$.$Model$.$_hasProperties$($args$$15$$[$args$$15$$.length - 1]) && ($ignoreLastArg$$1$$ = !0, $options$$31$$ = $args$$15$$[$args$$15$$.length - 1] || {});
      if (null == $args$$15$$[0]) {
        return{attributes:null, options:$options$$31$$};
      }
      if ($oj$$1$$.$Model$.$_hasProperties$($args$$15$$[0]) || $oj$$1$$.$Object$.$isEmpty$($args$$15$$[0])) {
        for ($i$$28_prop$$31$$ in $args$$15$$[0]) {
          $args$$15$$[0].hasOwnProperty($i$$28_prop$$31$$) && ($attributes$$4$$[$i$$28_prop$$31$$] = $args$$15$$[0][$i$$28_prop$$31$$]);
        }
      } else {
        for ($i$$28_prop$$31$$ = 0;$i$$28_prop$$31$$ < $args$$15$$.length;$i$$28_prop$$31$$ += 2) {
          if (void 0 !== $args$$15$$[$i$$28_prop$$31$$] || $i$$28_prop$$31$$ < $args$$15$$.length - 1 || !$ignoreLastArg$$1$$ && $i$$28_prop$$31$$ === $args$$15$$.length - 1) {
            $attributes$$4$$[$args$$15$$[$i$$28_prop$$31$$]] = $args$$15$$[$i$$28_prop$$31$$ + 1];
          }
        }
      }
    }
    return{attributes:$attributes$$4$$, options:$options$$31$$};
  };
  $oj$$1$$.$Model$.$_copyOptions$ = function $$oj$$1$$$$Model$$$_copyOptions$$($options$$32$$) {
    var $optReturn$$ = {}, $prop$$32$$;
    $options$$32$$ = $options$$32$$ || {};
    for ($prop$$32$$ in $options$$32$$) {
      $options$$32$$.hasOwnProperty($prop$$32$$) && ($optReturn$$[$prop$$32$$] = $options$$32$$[$prop$$32$$]);
    }
    return $optReturn$$;
  };
  $oj$$1$$.$Model$.$_triggerError$ = function $$oj$$1$$$$Model$$$_triggerError$$($self$$2$$, $silent$$8$$, $options$$33$$, $status$$1$$, $err$$1$$, $xhr$$1$$) {
    $options$$33$$ = $options$$33$$ || {};
    $options$$33$$.textStatus = $status$$1$$;
    $options$$33$$.errorThrown = $err$$1$$;
    $self$$2$$.$TriggerInternal$($silent$$8$$, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$2$$, $xhr$$1$$, $options$$33$$);
  };
  $oj$$1$$.$Model$.prototype.save = function $$oj$$1$$$$Model$$$save$($attributes$$5$$, $options$$34$$) {
    var $argResults_forceNew$$, $success$$9$$, $callback$$71$$, $self$$3$$, $userErr$$1$$, $patch$$;
    $argResults_forceNew$$ = $oj$$1$$.$Model$.$_processArgs$(arguments);
    var $opts$$3$$, $oldAttrs$$, $attrArgs$$;
    $attrArgs$$ = void 0 === $attributes$$5$$ ? void 0 : $argResults_forceNew$$.attributes;
    $options$$34$$ = $options$$34$$ || {};
    $opts$$3$$ = $oj$$1$$.$Model$.$_copyOptions$($argResults_forceNew$$.options);
    if (!this.$_checkValid$(this.attributes, $opts$$3$$, !0)) {
      return!1;
    }
    $opts$$3$$.wait || this.set($attrArgs$$);
    $argResults_forceNew$$ = void 0 === $opts$$3$$.forceNew ? !1 : $opts$$3$$.forceNew;
    $self$$3$$ = this;
    $userErr$$1$$ = $opts$$3$$.error;
    $patch$$ = $opts$$3$$.patch;
    $opts$$3$$.error = function $$opts$$3$$$error$($xhr$$2$$, $status$$2$$, $err$$2$$) {
      $oj$$1$$.$Model$.$_triggerError$($self$$3$$, !1, $options$$34$$, $status$$2$$, $err$$2$$, $xhr$$2$$);
      $userErr$$1$$ && $userErr$$1$$.apply($self$$3$$, arguments);
    };
    $opts$$3$$.saveAttrs = $opts$$3$$.wait ? this.$_attrUnion$($attrArgs$$) : this.attributes;
    $oldAttrs$$ = this.attributes;
    this.attributes = $opts$$3$$.saveAttrs;
    $opts$$3$$.saveAttrs = this.toJSON();
    this.attributes = $oldAttrs$$;
    if (!$argResults_forceNew$$ && !this.$isNew$()) {
      return $success$$9$$ = $opts$$3$$.success, $opts$$3$$.success = function $$opts$$3$$$success$($resp$$) {
        var $attrs$$4$$;
        $opts$$3$$.xhr && ($options$$34$$.xhr = $opts$$3$$.xhr);
        $resp$$ && ($attrs$$4$$ = $$$$1$$.isFunction($self$$3$$.parse) ? $self$$3$$.parse($resp$$) : $resp$$, $self$$3$$.attributes = $$$$1$$.extend(!0, $self$$3$$.attributes, $attrs$$4$$), $self$$3$$.$SetupId$());
        $oj$$1$$.$Model$.$_fireSyncEvent$($self$$3$$, $resp$$, $opts$$3$$);
        $opts$$3$$.wait && $self$$3$$.set($attrArgs$$);
        $success$$9$$ && $success$$9$$.call($oj$$1$$.$Model$.$GetContext$($opts$$3$$, $self$$3$$), $self$$3$$, $resp$$, $options$$34$$);
        $self$$3$$.$_clearChanged$();
      }, $opts$$3$$.attrs || ($opts$$3$$.attrs = void 0 === $attrArgs$$ ? void 0 : $patch$$ ? $attrArgs$$ : $opts$$3$$.saveAttrs), $oj$$1$$.$Model$.$_internalSync$($patch$$ ? "patch" : "update", this, $opts$$3$$);
    }
    $callback$$71$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$3$$);
    $opts$$3$$.success = function $$opts$$3$$$success$($resp$$1$$) {
      var $attrs$$5$$;
      $opts$$3$$.xhr && ($options$$34$$.xhr = $opts$$3$$.xhr);
      if ($resp$$1$$) {
        $attrs$$5$$ = $$$$1$$.isFunction($self$$3$$.parse) ? $self$$3$$.parse($resp$$1$$) : $resp$$1$$;
        if (!$self$$3$$.$_checkValid$($attrs$$5$$, $opts$$3$$, !0)) {
          return;
        }
        $self$$3$$.attributes = $$$$1$$.extend(!0, $self$$3$$.attributes, $attrs$$5$$);
        $self$$3$$.$SetupId$();
      }
      $opts$$3$$.wait && $self$$3$$.set($attrArgs$$);
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$3$$, $resp$$1$$, $opts$$3$$);
      $callback$$71$$ && $callback$$71$$.call($oj$$1$$.$Model$.$GetContext$($opts$$3$$, $self$$3$$), $self$$3$$, $resp$$1$$, $options$$34$$);
      $self$$3$$.$_clearChanged$();
    };
    $opts$$3$$.attrs || ($opts$$3$$.attrs = $opts$$3$$.saveAttrs);
    $opts$$3$$.parse = !0;
    $patch$$ && ($opts$$3$$.saveAttrs = $opts$$3$$.attrs);
    return $oj$$1$$.$Model$.$_internalSync$("create", this, $opts$$3$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.save", {save:$oj$$1$$.$Model$.prototype.save});
  $oj$$1$$.$Model$.prototype.$_attrUnion$ = function $$oj$$1$$$$Model$$$$_attrUnion$$($attrs$$6$$) {
    var $attrReturn$$ = {}, $prop$$33$$;
    for ($prop$$33$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$33$$) && ($attrReturn$$[$prop$$33$$] = this.attributes[$prop$$33$$]);
    }
    for ($prop$$33$$ in $attrs$$6$$) {
      $attrs$$6$$.hasOwnProperty($prop$$33$$) && ($attrReturn$$[$prop$$33$$] = $attrs$$6$$[$prop$$33$$]);
    }
    return $attrReturn$$;
  };
  $oj$$1$$.$Model$.$GetPropValue$ = function $$oj$$1$$$$Model$$$GetPropValue$$($obj$$46$$, $property$$10$$) {
    return $obj$$46$$ ? $$$$1$$.isFunction($obj$$46$$[$property$$10$$]) ? $obj$$46$$[$property$$10$$]() : $obj$$46$$[$property$$10$$] : $$$$1$$.isFunction($property$$10$$) ? $property$$10$$() : $property$$10$$;
  };
  $oj$$1$$.$Model$.$IsComplexValue$ = function $$oj$$1$$$$Model$$$IsComplexValue$$($val$$15$$) {
    return $val$$15$$ && $val$$15$$.hasOwnProperty("value") && $val$$15$$.hasOwnProperty("comparator");
  };
  $oj$$1$$.$Model$.prototype.$_hasAttrs$ = function $$oj$$1$$$$Model$$$$_hasAttrs$$($attrs$$7$$) {
    for (var $prop$$34$$ in $attrs$$7$$) {
      if ($attrs$$7$$.hasOwnProperty($prop$$34$$)) {
        if (!this.attributes.hasOwnProperty($prop$$34$$)) {
          return!1;
        }
        for (var $val$$16$$ = $$$$1$$.isArray($attrs$$7$$[$prop$$34$$]) ? $attrs$$7$$[$prop$$34$$] : [$attrs$$7$$[$prop$$34$$]], $i$$29$$ = 0;$i$$29$$ < $val$$16$$.length;$i$$29$$++) {
          if ($oj$$1$$.$Model$.$IsComplexValue$($val$$16$$[$i$$29$$])) {
            var $comparator$$1$$ = $val$$16$$[$i$$29$$].comparator, $value$$62$$ = $val$$16$$[$i$$29$$].value;
            if ($oj$$1$$.$StringUtils$.$isString$($comparator$$1$$)) {
              throw Error("String comparator invalid for local where/findWhere");
            }
            if (!$comparator$$1$$(this, $prop$$34$$, $value$$62$$)) {
              return!1;
            }
          } else {
            if ($attrs$$7$$[$prop$$34$$] !== this.attributes[$prop$$34$$]) {
              return!1;
            }
          }
        }
      }
    }
    return!0;
  };
  $oj$$1$$.$Model$.prototype.matches = function $$oj$$1$$$$Model$$$matches$($JSCompiler_inline_result$$4_attrs$$8$$) {
    a: {
      for (var $prop$$inline_344$$ in $JSCompiler_inline_result$$4_attrs$$8$$) {
        if (this.get($prop$$inline_344$$) !== $JSCompiler_inline_result$$4_attrs$$8$$[$prop$$inline_344$$]) {
          $JSCompiler_inline_result$$4_attrs$$8$$ = !1;
          break a;
        }
      }
      $JSCompiler_inline_result$$4_attrs$$8$$ = !0;
    }
    return $JSCompiler_inline_result$$4_attrs$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.matches", {matches:$oj$$1$$.$Model$.prototype.matches});
  $oj$$1$$.$Model$.prototype.$Contains$ = function $$oj$$1$$$$Model$$$$Contains$$($attrList_attrs$$9$$) {
    $attrList_attrs$$9$$ = $attrList_attrs$$9$$.constructor === Array ? $attrList_attrs$$9$$ : [$attrList_attrs$$9$$];
    var $i$$30$$;
    for ($i$$30$$ = 0;$i$$30$$ < $attrList_attrs$$9$$.length;$i$$30$$++) {
      if (this.$_hasAttrs$($attrList_attrs$$9$$[$i$$30$$])) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$1$$.$Model$.$_getSuccess$ = function $$oj$$1$$$$Model$$$_getSuccess$$($options$$35$$) {
    return null != $options$$35$$ && $options$$35$$.success ? $options$$35$$.success : null;
  };
  $oj$$1$$.$Model$.$GetContext$ = function $$oj$$1$$$$Model$$$GetContext$$($options$$36$$, $model$$6$$) {
    return void 0 !== $options$$36$$ && void 0 !== $options$$36$$.context ? $options$$36$$.context : $model$$6$$;
  };
  $oj$$1$$.$Model$.prototype.$isNew$ = function $$oj$$1$$$$Model$$$$isNew$$() {
    return void 0 == this.$GetId$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isNew", {$isNew$:$oj$$1$$.$Model$.prototype.$isNew$});
  $oj$$1$$.$Model$.prototype.$_getIdAttr$ = function $$oj$$1$$$$Model$$$$_getIdAttr$$() {
    return this.idAttribute || "id";
  };
  $oj$$1$$.$Model$.prototype.$GetId$ = function $$oj$$1$$$$Model$$$$GetId$$() {
    return this.id;
  };
  $oj$$1$$.$Model$.prototype.$changedAttributes$ = function $$oj$$1$$$$Model$$$$changedAttributes$$($attributes$$6$$) {
    if ($attributes$$6$$) {
      var $internalChanges$$ = {}, $prop$$36$$;
      for ($prop$$36$$ in $attributes$$6$$) {
        $attributes$$6$$.hasOwnProperty($prop$$36$$) && ($oj$$1$$.$Object$.$__innerEquals$($attributes$$6$$[$prop$$36$$], this.attributes[$prop$$36$$]) || ($internalChanges$$[$prop$$36$$] = $attributes$$6$$[$prop$$36$$]));
      }
      return $oj$$1$$.$Object$.$isEmpty$($internalChanges$$) ? !1 : $internalChanges$$;
    }
    return $oj$$1$$.$Object$.$isEmpty$(this.changed) ? !1 : this.changed;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.changedAttributes", {$changedAttributes$:$oj$$1$$.$Model$.prototype.$changedAttributes$});
  $oj$$1$$.$Model$.prototype.$hasChanged$ = function $$oj$$1$$$$Model$$$$hasChanged$$($attribute$$) {
    return void 0 !== $attribute$$ ? $oj$$1$$.$Model$.$_hasProperties$(this.changed) && this.changed.hasOwnProperty($attribute$$) : $oj$$1$$.$Model$.$_hasProperties$(this.changed);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.hasChanged", {$hasChanged$:$oj$$1$$.$Model$.prototype.$hasChanged$});
  $oj$$1$$.$Model$.prototype.destroy = function $$oj$$1$$$$Model$$$destroy$($options$$37$$) {
    $options$$37$$ = $options$$37$$ || {};
    var $isWait$$ = $options$$37$$.wait, $callback$$72$$, $userErr$$2$$ = $options$$37$$.error, $self$$4$$ = this, $xhr$$4$$, $opts$$4$$;
    $opts$$4$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$37$$);
    $callback$$72$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$4$$);
    var $collection$$2$$ = this.$GetCollection$();
    $opts$$4$$.success = function $$opts$$4$$$success$($data$$33$$) {
      $opts$$4$$.xhr && ($options$$37$$.xhr = $opts$$4$$.xhr);
      $isWait$$ && $self$$4$$.$_fireDestroy$();
      if ($collection$$2$$) {
        var $props$$1$$ = $oj$$1$$.$StringUtils$.$isString$($data$$33$$) && !$oj$$1$$.$StringUtils$.$isEmpty$($data$$33$$) ? JSON.parse($data$$33$$) : $data$$33$$;
        $collection$$2$$.$_setPagingReturnValues$($props$$1$$, null, $data$$33$$, !0);
      }
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$4$$, $data$$33$$, $opts$$4$$);
      $callback$$72$$ && $callback$$72$$.call($oj$$1$$.$Model$.$GetContext$($opts$$4$$, $self$$4$$), $self$$4$$, $data$$33$$, $options$$37$$);
    };
    $opts$$4$$.error = function $$opts$$4$$$error$($xhr$$6$$, $status$$5$$, $err$$3$$) {
      $self$$4$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$4$$, $xhr$$6$$, $options$$37$$);
      $userErr$$2$$ && $userErr$$2$$.apply($self$$4$$, arguments);
    };
    if (!this.$isNew$()) {
      return $xhr$$4$$ = $oj$$1$$.$Model$.$_internalSync$("delete", this, $opts$$4$$), $isWait$$ || this.$_fireDestroy$(), $xhr$$4$$;
    }
    $isWait$$ || this.$_fireDestroy$();
    $callback$$72$$ && $callback$$72$$.call($oj$$1$$.$Model$.$GetContext$($opts$$4$$, $self$$4$$), $self$$4$$, null, $options$$37$$);
    return!1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.destroy", {destroy:$oj$$1$$.$Model$.prototype.destroy});
  $oj$$1$$.$Model$.prototype.$_fireRequest$ = function $$oj$$1$$$$Model$$$$_fireRequest$$($model$$7$$, $xhr$$7$$, $options$$38$$, $silent$$9$$) {
    this.$TriggerInternal$($silent$$9$$, $oj$$1$$.$Events$.$EventType$.REQUEST, $model$$7$$, $xhr$$7$$, $options$$38$$);
  };
  $oj$$1$$.$Model$.prototype.$_fireDestroy$ = function $$oj$$1$$$$Model$$$$_fireDestroy$$() {
    this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.DESTROY, this, this.collection, null);
  };
  $oj$$1$$.$Model$.$_fireSyncEvent$ = function $$oj$$1$$$$Model$$$_fireSyncEvent$$($model$$8$$, $resp$$2$$, $options$$39$$) {
    $model$$8$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $model$$8$$, $resp$$2$$, $options$$39$$);
  };
  $oj$$1$$.$Model$.prototype.toJSON = function $$oj$$1$$$$Model$$$toJSON$() {
    var $retObj$$4$$ = {}, $prop$$37$$;
    for ($prop$$37$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$37$$) && ($$$$1$$.isArray(this.attributes[$prop$$37$$]) ? $retObj$$4$$[$prop$$37$$] = this.attributes[$prop$$37$$].slice(0) : $retObj$$4$$[$prop$$37$$] = this.attributes[$prop$$37$$]);
    }
    return $retObj$$4$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.toJSON", {toJSON:$oj$$1$$.$Model$.prototype.toJSON});
  $oj$$1$$.$Model$.prototype.$previous$ = function $$oj$$1$$$$Model$$$$previous$$($attr$$7$$) {
    return this.$previousAttrs$[$attr$$7$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previous", {$previous$:$oj$$1$$.$Model$.prototype.$previous$});
  $oj$$1$$.$Model$.prototype.$previousAttributes$ = function $$oj$$1$$$$Model$$$$previousAttributes$$() {
    return this.$previousAttrs$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previousAttributes", {$previousAttributes$:$oj$$1$$.$Model$.prototype.$previousAttributes$});
  $oj$$1$$.$Model$.prototype.sync = function $$oj$$1$$$$Model$$$sync$($method$$2$$, $model$$9$$, $options$$40$$) {
    return window.oj.sync($method$$2$$, $model$$9$$, $options$$40$$);
  };
  $oj$$1$$.$Model$.$_internalSync$ = function $$oj$$1$$$$Model$$$_internalSync$$($method$$3$$, $model$$10$$, $options$$41$$) {
    $options$$41$$ = $options$$41$$ || {};
    $model$$10$$.oauth && ($options$$41$$.oauthHeader = $model$$10$$.oauth.getHeader());
    !$options$$41$$.dataType && $model$$10$$.dataType && ($options$$41$$.dataType = $model$$10$$.dataType);
    !$options$$41$$.jsonpCallback && $model$$10$$.jsonpCallback && ($options$$41$$.jsonpCallback = $model$$10$$.jsonpCallback);
    if ("create" === $method$$3$$ || "patch" === $method$$3$$ || "update" === $method$$3$$) {
      $options$$41$$.$parsedData$ = $model$$10$$.parseSave.call($model$$10$$, "patch" === $method$$3$$ ? $options$$41$$.attrs : $options$$41$$.saveAttrs);
    }
    var $recordId_urlOpt$$ = null;
    $model$$10$$ instanceof $oj$$1$$.$Model$ && ($recordId_urlOpt$$ = $model$$10$$.$GetId$());
    var $newOpt$$ = {};
    if ($options$$41$$) {
      for (var $prop$$38$$ in $options$$41$$) {
        $newOpt$$[$prop$$38$$] = $options$$41$$[$prop$$38$$];
      }
    }
    $recordId_urlOpt$$ = $oj$$1$$.$Model$.$SetCustomURLOptions$($recordId_urlOpt$$, $model$$10$$, $options$$41$$);
    for ($prop$$38$$ in $recordId_urlOpt$$) {
      $newOpt$$[$prop$$38$$] = $recordId_urlOpt$$[$prop$$38$$];
    }
    $options$$41$$.xhr = $model$$10$$.sync($method$$3$$, $model$$10$$, $newOpt$$);
    $newOpt$$.xhr && ($options$$41$$.xhr = $newOpt$$.xhr);
    return $options$$41$$.xhr;
  };
  $oj$$1$$.$Model$.$SetCustomURLOptions$ = function $$oj$$1$$$$Model$$$SetCustomURLOptions$$($recordID$$, $context$$14_options$$42$$, $opt$$1$$) {
    $context$$14_options$$42$$ = $context$$14_options$$42$$ instanceof $oj$$1$$.$Collection$ ? $context$$14_options$$42$$.$ModifyOptionsForCustomURL$($opt$$1$$) : {};
    $recordID$$ && ($context$$14_options$$42$$.recordID = $recordID$$);
    return $context$$14_options$$42$$;
  };
  $oj$$1$$.$sync$ = function $$oj$$1$$$$sync$$($method$$4_url$$18$$, $model$$11$$, $options$$43$$) {
    function $_fireAndReturn$$($xhr$$8$$) {
      $model$$11$$.$_fireRequest$($model$$11$$, $xhr$$8$$, $options$$43$$, $options$$43$$.silent);
      return $xhr$$8$$;
    }
    $options$$43$$ = $options$$43$$ || {};
    var $customURL_restService$$, $success$$10$$ = $options$$43$$.success, $error$$3$$ = $options$$43$$.error;
    $customURL_restService$$ = $model$$11$$.customURL;
    if ("create" === $method$$4_url$$18$$.valueOf()) {
      return $method$$4_url$$18$$ = ($method$$4_url$$18$$ = $model$$11$$.$_saveUrl$()) ? $method$$4_url$$18$$ : $oj$$1$$.$Model$.$GetPropValue$($model$$11$$, "url"), $customURL_restService$$ = new $oj$$1$$.$RestImpl$($method$$4_url$$18$$, $customURL_restService$$), $_fireAndReturn$$($customURL_restService$$.$addRecord$($options$$43$$.$parsedData$, $error$$3$$, $options$$43$$, $model$$11$$));
    }
    if ("read" === $method$$4_url$$18$$.valueOf()) {
      if ($model$$11$$ instanceof $oj$$1$$.$Model$) {
        return $method$$4_url$$18$$ = $options$$43$$.url ? $options$$43$$.url : $oj$$1$$.$Model$.$GetPropValue$($model$$11$$, "url"), $customURL_restService$$ = new $oj$$1$$.$RestImpl$($method$$4_url$$18$$, $customURL_restService$$), $_fireAndReturn$$($customURL_restService$$.$getRecord$($success$$10$$, $error$$3$$, $model$$11$$.$GetId$(), $options$$43$$, $oj$$1$$.$Model$.$GetContext$($options$$43$$, $model$$11$$)));
      }
      $method$$4_url$$18$$ = $model$$11$$.$GetCollectionFetchUrl$($options$$43$$);
      $customURL_restService$$ = new $oj$$1$$.$RestImpl$($method$$4_url$$18$$, $customURL_restService$$);
      return $_fireAndReturn$$($customURL_restService$$.$getRecords$($success$$10$$, $error$$3$$, $options$$43$$, $model$$11$$));
    }
    $customURL_restService$$ = new $oj$$1$$.$RestImpl$($oj$$1$$.$Model$.$GetPropValue$($model$$11$$, "url"), $customURL_restService$$);
    var $recordId$$1$$ = null;
    $model$$11$$ instanceof $oj$$1$$.$Model$ && ($recordId$$1$$ = $model$$11$$.$GetId$());
    return "update" === $method$$4_url$$18$$.valueOf() ? $_fireAndReturn$$($customURL_restService$$.$updateRecord$($success$$10$$, $recordId$$1$$, $options$$43$$.$parsedData$, $error$$3$$, $options$$43$$, $model$$11$$, !1)) : "patch" === $method$$4_url$$18$$.valueOf() ? $_fireAndReturn$$($customURL_restService$$.$updateRecord$($success$$10$$, $recordId$$1$$, $options$$43$$.$parsedData$, $error$$3$$, $options$$43$$, $model$$11$$, !0)) : "delete" === $method$$4_url$$18$$.valueOf() ? $_fireAndReturn$$($customURL_restService$$.$deleteRecord$($recordId$$1$$, 
    $error$$3$$, $options$$43$$, $model$$11$$)) : null;
  };
  $goog$exportPath_$$("sync", $oj$$1$$.$sync$, $oj$$1$$);
  $oj$$1$$.$Model$.$_urlError$ = function $$oj$$1$$$$Model$$$_urlError$$($ajaxOptions$$) {
    if (!$ajaxOptions$$.url) {
      throw Error("The url property or function must be specified");
    }
  };
  $oj$$1$$.ajax = function $$oj$$1$$$ajax$() {
    arguments && 0 < arguments.length && $oj$$1$$.$Model$.$_urlError$(arguments[0]);
    return $$$$1$$.ajax.apply(window.oj, arguments);
  };
  $goog$exportPath_$$("ajax", $oj$$1$$.ajax, $oj$$1$$);
  $oj$$1$$.$Collection$ = function $$oj$$1$$$$Collection$$($models$$, $options$$44$$) {
    $oj$$1$$.$Collection$.$_justExtending$ || $oj$$1$$.$Collection$._init(this, $models$$, $options$$44$$, null);
  };
  $goog$exportPath_$$("Collection", $oj$$1$$.$Collection$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Collection$, $oj$$1$$.$Object$, "oj.Collection");
  $oj$$1$$.$Collection$.prototype.$model$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.model", {$model$:$oj$$1$$.$Collection$.prototype.$model$});
  $oj$$1$$.$Collection$.prototype.$modelId$ = function $$oj$$1$$$$Collection$$$$modelId$$($attrs$$10$$) {
    var $model$$12$$ = this.model;
    return $model$$12$$ && $attrs$$10$$ ? $attrs$$10$$[$model$$12$$.idAttribute || $model$$12$$.prototype.idAttribute || "id"] : null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.modelId", {$modelId$:$oj$$1$$.$Collection$.prototype.$modelId$});
  $oj$$1$$.$Collection$.prototype.length = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.length", {length:$oj$$1$$.$Collection$.prototype.length});
  $oj$$1$$.$Collection$.prototype.$models$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.models", {$models$:$oj$$1$$.$Collection$.prototype.$models$});
  $oj$$1$$.$Collection$.prototype.$_modelIndices$ = [];
  $oj$$1$$.$Collection$.prototype.url = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.url", {url:$oj$$1$$.$Collection$.prototype.url});
  $oj$$1$$.$Collection$.prototype.$changes$ = [];
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.changes", {$changes$:$oj$$1$$.$Collection$.prototype.$changes$});
  $oj$$1$$.$Collection$.prototype.$customURL$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customURL", {$customURL$:$oj$$1$$.$Collection$.prototype.$customURL$});
  $oj$$1$$.$Collection$.prototype.$customPagingOptions$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customPagingOptions", {$customPagingOptions$:$oj$$1$$.$Collection$.prototype.$customPagingOptions$});
  $oj$$1$$.$Collection$.prototype.$lastFetchSize$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchSize", {$lastFetchSize$:$oj$$1$$.$Collection$.prototype.$lastFetchSize$});
  $oj$$1$$.$Collection$.prototype.$hasMore$ = !1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.hasMore", {$hasMore$:$oj$$1$$.$Collection$.prototype.$hasMore$});
  $oj$$1$$.$Collection$.prototype.$totalResults$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.totalResults", {$totalResults$:$oj$$1$$.$Collection$.prototype.$totalResults$});
  $oj$$1$$.$Collection$.prototype.$lastFetchCount$ = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchCount", {$lastFetchCount$:$oj$$1$$.$Collection$.prototype.$lastFetchCount$});
  $oj$$1$$.$Collection$.prototype.$modelLimit$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.modelLimit", {$modelLimit$:$oj$$1$$.$Collection$.prototype.$modelLimit$});
  $oj$$1$$.$Collection$.prototype.offset = void 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.offset", {offset:$oj$$1$$.$Collection$.prototype.offset});
  $oj$$1$$.$Collection$.prototype.$fetchSize$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetchSize", {$fetchSize$:$oj$$1$$.$Collection$.prototype.$fetchSize$});
  $oj$$1$$.$Collection$.prototype.$sortDirection$ = 1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortDirection", {$sortDirection$:$oj$$1$$.$Collection$.prototype.$sortDirection$});
  $oj$$1$$.$Collection$.prototype.$comparator$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.comparator", {$comparator$:$oj$$1$$.$Collection$.prototype.$comparator$});
  $oj$$1$$.$Collection$.prototype.$sortSupported$ = !0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortSupported", {$sortSupported$:$oj$$1$$.$Collection$.prototype.$sortSupported$});
  $oj$$1$$.$Collection$.prototype.Init = function $$oj$$1$$$$Collection$$$Init$() {
    $oj$$1$$.$Collection$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$Collection$.extend = function $$oj$$1$$$$Collection$$extend$($properties$$5$$, $classProperties$$1$$) {
    $oj$$1$$.$Collection$.$_justExtending$ = !0;
    var $obj$$47$$ = new $oj$$1$$.$Collection$;
    $oj$$1$$.$Collection$.$_justExtending$ = !1;
    $$$$1$$.extend($obj$$47$$, this.prototype);
    var $Collection$$;
    $Collection$$ = $properties$$5$$ && $properties$$5$$.constructor && $properties$$5$$.hasOwnProperty("constructor") ? $properties$$5$$.constructor : function($models$$1$$, $options$$45$$) {
      $oj$$1$$.$Collection$._init(this, $models$$1$$, $options$$45$$, $properties$$5$$);
    };
    if ($classProperties$$1$$) {
      for (var $prop$$39$$ in $classProperties$$1$$) {
        $classProperties$$1$$.hasOwnProperty($prop$$39$$) && ($Collection$$[$prop$$39$$] = $classProperties$$1$$[$prop$$39$$]);
      }
    }
    if ($properties$$5$$) {
      for ($prop$$39$$ in $properties$$5$$) {
        $properties$$5$$.hasOwnProperty($prop$$39$$) && ($obj$$47$$[$prop$$39$$] = $properties$$5$$[$prop$$39$$]);
      }
    }
    $$$$1$$.extend($Collection$$, this);
    $Collection$$.prototype = $obj$$47$$;
    $Collection$$.extend = $oj$$1$$.$Collection$.extend;
    return $Collection$$.prototype.constructor = $Collection$$;
  };
  $goog$exportPath_$$("Collection.extend", $oj$$1$$.$Collection$.extend, $oj$$1$$);
  $oj$$1$$.$Collection$._init = function $$oj$$1$$$$Collection$$_init$($collection$$3$$, $models$$2$$, $options$$46$$, $properties$$6$$) {
    var $i$$31_prop$$40$$, $modelList_optionlist$$;
    $collection$$3$$.Init();
    $oj$$1$$.$Events$.$Mixin$($collection$$3$$);
    if ($properties$$6$$) {
      for ($i$$31_prop$$40$$ in $properties$$6$$) {
        $properties$$6$$.hasOwnProperty($i$$31_prop$$40$$) && ($collection$$3$$[$i$$31_prop$$40$$] = $properties$$6$$[$i$$31_prop$$40$$]);
      }
    }
    $options$$46$$ = $options$$46$$ || {};
    $modelList_optionlist$$ = ["url", "comparator", "model", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$, "modelLimit", "customURL"];
    for ($i$$31_prop$$40$$ = 0;$i$$31_prop$$40$$ < $modelList_optionlist$$.length;$i$$31_prop$$40$$++) {
      $options$$46$$.hasOwnProperty($modelList_optionlist$$[$i$$31_prop$$40$$]) && void 0 !== $options$$46$$[$modelList_optionlist$$[$i$$31_prop$$40$$]] && ($collection$$3$$[$modelList_optionlist$$[$i$$31_prop$$40$$]] = $options$$46$$[$modelList_optionlist$$[$i$$31_prop$$40$$]]);
    }
    void 0 === $collection$$3$$.$_getFetchSize$(null) && $collection$$3$$.$setFetchSize$(-1);
    void 0 === $collection$$3$$.modelLimit && $collection$$3$$.$setModelLimit$(-1);
    $collection$$3$$.hasMore = !1;
    $collection$$3$$.$lruCount$ = 0;
    $collection$$3$$.$_setModels$([], !0);
    $options$$46$$.parse && ($models$$2$$ = $collection$$3$$.parse($models$$2$$));
    if (null != $models$$2$$) {
      for ($options$$46$$.$noparse$ = !0, $modelList_optionlist$$ = $models$$2$$ instanceof Array ? $models$$2$$ : [$models$$2$$], $i$$31_prop$$40$$ = 0;$i$$31_prop$$40$$ < $modelList_optionlist$$.length;$i$$31_prop$$40$$ += 1) {
        $collection$$3$$.add($modelList_optionlist$$[$i$$31_prop$$40$$], $options$$46$$);
      }
    }
    $collection$$3$$.$_setLength$();
    $properties$$6$$ && $properties$$6$$.initialize && $properties$$6$$.initialize.call($collection$$3$$, $models$$2$$, $options$$46$$);
  };
  $oj$$1$$.$Collection$.prototype.on = function $$oj$$1$$$$Collection$$$on$() {
  };
  $oj$$1$$.$Collection$.prototype.$OnInternal$ = function $$oj$$1$$$$Collection$$$$OnInternal$$() {
  };
  $oj$$1$$.$Collection$.prototype.$TriggerInternal$ = function $$oj$$1$$$$Collection$$$$TriggerInternal$$() {
  };
  $oj$$1$$.$Collection$.prototype.$_fireRequest$ = function $$oj$$1$$$$Collection$$$$_fireRequest$$($collection$$4$$, $xhr$$9$$, $options$$48$$, $silent$$13$$) {
    this.$TriggerInternal$($silent$$13$$, $oj$$1$$.$Events$.$EventType$.REQUEST, $collection$$4$$, $xhr$$9$$, $options$$48$$);
  };
  $oj$$1$$.$Collection$.prototype.$_resetChanges$ = function $$oj$$1$$$$Collection$$$$_resetChanges$$() {
    this.changes = [];
  };
  $oj$$1$$.$Collection$.prototype.$_setChangeAt$ = function $$oj$$1$$$$Collection$$$$_setChangeAt$$($start$$6$$, $count$$8$$) {
    for (var $at$$ = $start$$6$$;$at$$ < $start$$6$$ + $count$$8$$;$at$$++) {
      -1 === this.changes.indexOf($at$$) && (this.changes.push($at$$), this.changes.sort(function($a$$81$$, $b$$43$$) {
        return $a$$81$$ - $b$$43$$;
      }));
    }
  };
  $oj$$1$$.$Collection$.prototype.$_setModels$ = function $$oj$$1$$$$Collection$$$$_setModels$$($models$$3$$, $clearing$$) {
    this.models = $models$$3$$;
    if ($clearing$$) {
      this.$_modelIndices$ = [], this.$_resetChanges$();
    } else {
      for (var $i$$32$$ = 0;$i$$32$$ < $models$$3$$.length;$i$$32$$++) {
        $models$$3$$[$i$$32$$] && this.$_modelIndices$.push($i$$32$$);
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_getModels$ = function $$oj$$1$$$$Collection$$$$_getModels$$() {
    return this.models;
  };
  $oj$$1$$.$Collection$.prototype.$_getModelsLength$ = function $$oj$$1$$$$Collection$$$$_getModelsLength$$() {
    return this.$_getModels$().length;
  };
  $oj$$1$$.$Collection$.prototype.$_overUpperLimit$ = function $$oj$$1$$$$Collection$$$$_overUpperLimit$$($index$$50$$) {
    return $index$$50$$ < this.$_getModelsLength$() || this.$IsVirtual$() && (!this.$_hasTotalResults$() || 0 === this.$_getModelsLength$()) ? !1 : !0;
  };
  $oj$$1$$.$Collection$.prototype.$_hasTotalResults$ = function $$oj$$1$$$$Collection$$$$_hasTotalResults$$() {
    return $oj$$1$$.$Collection$.$_defined$(this.totalResults);
  };
  $oj$$1$$.$Collection$.$_defined$ = function $$oj$$1$$$$Collection$$$_defined$$($value$$63$$) {
    return null != $value$$63$$;
  };
  $oj$$1$$.$Collection$.prototype.$_pushModel$ = function $$oj$$1$$$$Collection$$$$_pushModel$$($model$$13$$) {
    this.$_getModels$().push($model$$13$$);
    this.$_modelIndices$.push(this.$_getModelsLength$() - 1);
    this.$_setChangeAt$(this.$_getModelsLength$() - 1, 1);
  };
  $oj$$1$$.$Collection$.prototype.$_pushModels$ = function $$oj$$1$$$$Collection$$$$_pushModels$$($model$$14$$) {
    this.$_makeModelHead$($model$$14$$);
    this.$_pushModel$($model$$14$$);
    this.$lruCount$++;
    $model$$14$$.$SetIndex$(this.$_getModelsLength$() - 1);
  };
  $oj$$1$$.$Collection$.prototype.$_reduceLRU$ = function $$oj$$1$$$$Collection$$$$_reduceLRU$$($removed$$) {
    if ($removed$$) {
      for (var $i$$33$$ = 0;$i$$33$$ < $removed$$.length;$i$$33$$++) {
        $removed$$[$i$$33$$] && this.$lruCount$--;
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_spliceModels$ = function $$oj$$1$$$$Collection$$$$_spliceModels$$($start$$7$$, $count$$9$$, $model$$15$$) {
    for (var $i$$34$$ = $start$$7$$;$i$$34$$ < $start$$7$$ + $count$$9$$;$i$$34$$++) {
      this.$_removePrevNext$(this.$_getModel$($i$$34$$));
    }
    void 0 === $model$$15$$ ? (this.$_reduceLRU$(this.$_getModels$().splice($start$$7$$, $count$$9$$)), this.$_spliceModelIndices$($start$$7$$, $start$$7$$ + $count$$9$$ - 1)) : (this.$_reduceLRU$(this.$_getModels$().splice($start$$7$$, $count$$9$$, $model$$15$$)), this.$_spliceModelIndices$($start$$7$$, $start$$7$$ + $count$$9$$ - 1), this.$_insertModelIndex$($start$$7$$), this.$_makeModelHead$($model$$15$$));
    this.$_setChangeAt$($start$$7$$, $count$$9$$);
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    this.$_realignModelIndices$($start$$7$$);
  };
  $oj$$1$$.$Collection$.prototype.$_getModel$ = function $$oj$$1$$$$Collection$$$$_getModel$$($index$$51$$) {
    return this.$_getModels$()[$index$$51$$];
  };
  $oj$$1$$.$Collection$.prototype.$_realignModelIndices$ = function $$oj$$1$$$$Collection$$$$_realignModelIndices$$($start$$8$$) {
    for (var $index$$52$$, $i$$35$$ = 0;$i$$35$$ < this.$_modelIndices$.length;$i$$35$$++) {
      $index$$52$$ = this.$_modelIndices$[$i$$35$$], $index$$52$$ >= $start$$8$$ && this.$_getModel$($index$$52$$) && this.$_getModel$($index$$52$$).$SetIndex$($index$$52$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_removePrevNext$ = function $$oj$$1$$$$Collection$$$$_removePrevNext$$($model$$16_oldNext$$) {
    if ($model$$16_oldNext$$) {
      var $oldPrev$$ = $model$$16_oldNext$$.$previousModel$;
      $model$$16_oldNext$$ = $model$$16_oldNext$$.$nextModel$;
      $oldPrev$$ ? $oldPrev$$.$SetNext$($model$$16_oldNext$$) : this.head = $model$$16_oldNext$$;
      $model$$16_oldNext$$ ? $model$$16_oldNext$$.$SetPrevious$($oldPrev$$) : this.tail = $oldPrev$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_makeModelHead$ = function $$oj$$1$$$$Collection$$$$_makeModelHead$$($model$$17$$) {
    $model$$17$$.$SetNext$(this.head);
    this.head ? this.head.$SetPrevious$($model$$17$$) : this.tail = $model$$17$$;
    $model$$17$$.$SetPrevious$(null);
    this.head = $model$$17$$;
  };
  $oj$$1$$.$Collection$.prototype.$_setModelIndex$ = function $$oj$$1$$$$Collection$$$$_setModelIndex$$($index$$53$$) {
    -1 === this.$_modelIndices$.indexOf($index$$53$$) && this.$_modelIndices$.push($index$$53$$);
  };
  $oj$$1$$.$Collection$.prototype.$_insertModelIndex$ = function $$oj$$1$$$$Collection$$$$_insertModelIndex$$($start$$9$$) {
    for (var $i$$37$$ = 0;$i$$37$$ < this.$_modelIndices$.length;$i$$37$$++) {
      this.$_modelIndices$[$i$$37$$] >= $start$$9$$ && this.$_modelIndices$[$i$$37$$]++;
    }
    this.$_modelIndices$.push($start$$9$$);
  };
  $oj$$1$$.$Collection$.prototype.$_spliceModelIndices$ = function $$oj$$1$$$$Collection$$$$_spliceModelIndices$$($start$$10$$, $end$$3$$) {
    void 0 === $end$$3$$ && ($end$$3$$ = $start$$10$$);
    this.$_clearModelIndices$($start$$10$$, $end$$3$$);
    for (var $count$$11$$ = $end$$3$$ - $start$$10$$ + 1, $i$$38$$ = 0;$i$$38$$ < this.$_modelIndices$.length;$i$$38$$++) {
      this.$_modelIndices$[$i$$38$$] > $end$$3$$ && (this.$_modelIndices$[$i$$38$$] -= $count$$11$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_clearModelIndices$ = function $$oj$$1$$$$Collection$$$$_clearModelIndices$$($start$$11$$, $end$$4$$) {
    void 0 === $end$$4$$ && ($end$$4$$ = $start$$11$$);
    for (var $i$$39$$ = $start$$11$$;$i$$39$$ <= $end$$4$$;$i$$39$$++) {
      var $idx$$ = this.$_modelIndices$.indexOf($start$$11$$);
      -1 < $idx$$ && this.$_modelIndices$.splice($idx$$, 1);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_setModel$ = function $$oj$$1$$$$Collection$$$$_setModel$$($index$$54$$, $model$$18$$) {
    var $oldModel$$ = this.$_getModel$($index$$54$$);
    this.$_removePrevNext$($oldModel$$);
    $oldModel$$ || this.$lruCount$++;
    this.$_setChangeAt$($index$$54$$, 1);
    if (this.$_getModels$()[$index$$54$$] = $model$$18$$) {
      this.$_setModelIndex$($index$$54$$), $model$$18$$.$SetIndex$($index$$54$$), this.$_makeModelHead$($model$$18$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.$_clearOutModels$ = function $$oj$$1$$$$Collection$$$$_clearOutModels$$($n$$2$$) {
    var $current$$ = this.tail, $index$$55$$, $model$$19$$, $i$$40$$ = 0;
    for (this.tail = null;$current$$ && $i$$40$$ < $n$$2$$;) {
      $index$$55$$ = $current$$.$GetIndex$(), ($model$$19$$ = this.$_getModel$($index$$55$$)) && $model$$19$$.$hasChanged$() ? (this.tail || (this.tail = $current$$), $current$$ = $current$$.$previousModel$) : (this.$lruCount$--, -1 < $index$$55$$ && (this.$_setModel$($index$$55$$, void 0), this.$_clearModelIndices$($index$$55$$, $index$$55$$)), $current$$.$SetNext$(null), $current$$ = $current$$.$SetPrevious$(null), $i$$40$$++);
    }
    this.tail || (this.tail = $current$$);
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    0 === this.$lruCount$ && (this.tail = this.head = null);
  };
  $oj$$1$$.$Collection$.prototype.$_resetLRU$ = function $$oj$$1$$$$Collection$$$$_resetLRU$$() {
    this.$lruCount$ = 0;
    this.tail = this.head = null;
  };
  $oj$$1$$.$Collection$.prototype.$_manageLRU$ = function $$oj$$1$$$$Collection$$$$_manageLRU$$($incoming$$) {
    if (this.$IsVirtual$()) {
      var $limit$$ = this.$_getModelLimit$();
      -1 < $limit$$ && this.$lruCount$ + $incoming$$ > $limit$$ && this.$_clearOutModels$(this.$lruCount$ + $incoming$$ - $limit$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.clone = function $$oj$$1$$$$Collection$$$clone$() {
    return this.$_cloneInternal$(!0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.clone", {clone:$oj$$1$$.$Collection$.prototype.clone});
  $oj$$1$$.$Collection$.prototype.$_cloneInternal$ = function $$oj$$1$$$$Collection$$$$_cloneInternal$$($i$$41_withProperties$$) {
    var $c$$24$$ = new this.constructor, $model$$20$$;
    this.$IsVirtual$() && ($c$$24$$ = this.$_copyFetchProperties$($c$$24$$), $c$$24$$.$_resetModelsToFullLength$());
    $c$$24$$ = this.$_copyProperties$($c$$24$$);
    if ($i$$41_withProperties$$) {
      var $indices$$ = [];
      for ($i$$41_withProperties$$ = 0;$i$$41_withProperties$$ < this.$_modelIndices$.length;$i$$41_withProperties$$++) {
        $indices$$.push(this.$_modelIndices$[$i$$41_withProperties$$]);
      }
      $indices$$.sort(function($a$$82$$, $b$$44$$) {
        return $a$$82$$ - $b$$44$$;
      });
      var $index$$56$$;
      for ($i$$41_withProperties$$ = 0;$i$$41_withProperties$$ < $indices$$.length;$i$$41_withProperties$$++) {
        $index$$56$$ = $indices$$[$i$$41_withProperties$$], ($model$$20$$ = this.$_atInternal$($index$$56$$, null, !0, !1)) && $c$$24$$.$_addInternal$($model$$20$$.clone(), {at:$index$$56$$}, !0, !1);
      }
    }
    return $c$$24$$;
  };
  $oj$$1$$.$Collection$.prototype.$_copyProperties$ = function $$oj$$1$$$$Collection$$$$_copyProperties$$($collection$$5$$) {
    var $props$$2$$ = ["comparator", "model", "modelId"], $prop$$41$$, $i$$42$$;
    for ($i$$42$$ = 0;$i$$42$$ < $props$$2$$.length;$i$$42$$++) {
      $prop$$41$$ = $props$$2$$[$i$$42$$], $collection$$5$$[$prop$$41$$] = this[$prop$$41$$];
    }
    return $collection$$5$$;
  };
  $oj$$1$$.$Collection$.prototype.$_copyFetchProperties$ = function $$oj$$1$$$$Collection$$$$_copyFetchProperties$$($collection$$6$$) {
    var $props$$3$$ = ["totalResults", "hasMore", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$], $prop$$42$$, $i$$43$$;
    for ($i$$43$$ = 0;$i$$43$$ < $props$$3$$.length;$i$$43$$++) {
      $prop$$42$$ = $props$$3$$[$i$$43$$], $collection$$6$$[$prop$$42$$] = this[$prop$$42$$];
    }
    return $collection$$6$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getLength$ = function $$oj$$1$$$$Collection$$$$_getLength$$() {
    return this.length;
  };
  $oj$$1$$.$Collection$.prototype.$_setLength$ = function $$oj$$1$$$$Collection$$$$_setLength$$() {
    var $modelsLen$$ = this.$_getModelsLength$();
    this.length = $modelsLen$$;
    this.$IsVirtual$() || (this.totalResults = $modelsLen$$);
  };
  $oj$$1$$.$Collection$.$_createModel$ = function $$oj$$1$$$$Collection$$$_createModel$$($collection$$7$$, $attrs$$11$$, $options$$49$$) {
    return $collection$$7$$.model ? $$$$1$$.isFunction($collection$$7$$.model) ? new $collection$$7$$.model($attrs$$11$$, $options$$49$$) : new $collection$$7$$.model.constructor($attrs$$11$$, $options$$49$$) : null;
  };
  $oj$$1$$.$Collection$.prototype.$_newModel$ = function $$oj$$1$$$$Collection$$$$_newModel$$($m_validationValue$$, $opt$$2_options$$50$$, $ignoreDefaults$$) {
    var $newModel$$ = null;
    $opt$$2_options$$50$$ = $opt$$2_options$$50$$ || {};
    $opt$$2_options$$50$$.$ignoreDefaults$ = $ignoreDefaults$$;
    $m_validationValue$$ instanceof $oj$$1$$.$Model$ ? $newModel$$ = $m_validationValue$$ : this.model ? $newModel$$ = $oj$$1$$.$Collection$.$_createModel$(this, $m_validationValue$$, $opt$$2_options$$50$$) : ($opt$$2_options$$50$$.collection = this, $newModel$$ = new $oj$$1$$.$Model$($m_validationValue$$, $opt$$2_options$$50$$));
    return $opt$$2_options$$50$$.validate && $newModel$$.validate && ($m_validationValue$$ = $newModel$$.validate($newModel$$.attributes)) ? ($opt$$2_options$$50$$.validationError = $m_validationValue$$, this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, $newModel$$, $m_validationValue$$, $opt$$2_options$$50$$), null) : $newModel$$;
  };
  $oj$$1$$.$Collection$.prototype.add = function $$oj$$1$$$$Collection$$$add$($m$$1$$, $options$$51$$) {
    this.$_manageLRU$(1);
    return this.$_handlePromise$(this.$_addInternal$($m$$1$$, $options$$51$$, !1, ($options$$51$$ || {}).deferred));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.add", {add:$oj$$1$$.$Collection$.prototype.add});
  $oj$$1$$.$Collection$.prototype.$_addInternal$ = function $$oj$$1$$$$Collection$$$$_addInternal$$($m$$2$$, $options$$52$$, $fillIn$$, $deferred$$2$$) {
    function $mergeAttrs$$($collection$$10$$, $modelToTryAndMerge_sortOpt$$inline_370$$, $modelFoundInCollection$$1$$, $newModel$$3$$, $deferred$$4$$) {
      var $existingModel$$1$$, $modelAdded$$ = null;
      !$force$$ && $merge$$ && $modelFoundInCollection$$1$$ ? ($needSort$$1$$ = $modelFoundInCollection$$1$$.$Merge$($modelToTryAndMerge_sortOpt$$inline_370$$, $collection$$10$$.comparator, $silent$$14$$), $modelAdded$$ = $modelFoundInCollection$$1$$) : ($force$$ || ($existingModel$$1$$ = $collection$$10$$.$_getLocal$($newModel$$3$$)) && $fillIn$$ && $at$$1$$ !== $existingModel$$1$$.index && $oj$$1$$.$Logger$.warn("Duplicate ID fetched or added without merging, the id \x3d " + $existingModel$$1$$.$GetId$()), 
      void 0 === $existingModel$$1$$ ? (void 0 === $at$$1$$ ? ($collection$$10$$.$_pushModels$($newModel$$3$$), $index$$57$$ = $collection$$10$$.$_getModelsLength$() - 1, $collection$$10$$.$_getModel$($index$$57$$).$SetCid$()) : ($index$$57$$ = $at$$1$$, $collection$$10$$.$IsVirtual$() && $fillIn$$ ? $collection$$10$$.$_setModel$($index$$57$$, $newModel$$3$$) : $collection$$10$$.$_spliceModels$($index$$57$$, 0, $newModel$$3$$), $collection$$10$$.$_getModel$($index$$57$$).$SetCid$(), $at$$1$$ += 1), 
      void 0 === $newModel$$3$$.$GetCollection$() && $newModel$$3$$.$SetCollection$($collection$$10$$), $collection$$10$$.$_setLength$(), $collection$$10$$.$_listenToModel$($newModel$$3$$), $added$$ = !0, $modelAdded$$ = $newModel$$3$$) : $modelAdded$$ = $existingModel$$1$$);
      $fillIn$$ && ($options$$52$$ = $options$$52$$ || {}, $options$$52$$.fillIn = !0);
      $needSort$$1$$ && void 0 === $existingModel$$1$$ && !$sort$$ && void 0 === $at$$1$$ && 1 < $collection$$10$$.$_getLength$() && (-1 < $index$$57$$ && ($cid$$1$$ = $collection$$10$$.$_getModel$($index$$57$$).cid), $modelToTryAndMerge_sortOpt$$inline_370$$ = {}, $oj$$1$$.$CollectionUtils$.$copyInto$($modelToTryAndMerge_sortOpt$$inline_370$$, $options$$52$$), $modelToTryAndMerge_sortOpt$$inline_370$$.add = !0, $collection$$10$$.sort($modelToTryAndMerge_sortOpt$$inline_370$$), -1 < $index$$57$$ && 
      ($index$$57$$ = $collection$$10$$.$IsVirtual$() ? -1 : $collection$$10$$.indexOf($collection$$10$$.$getByCid$($cid$$1$$), $deferred$$4$$)));
      $added$$ && ($options$$52$$.at && ($options$$52$$.index = $index$$57$$), $newModel$$3$$ ? ($newModel$$3$$.$TriggerInternal$($silent$$14$$, $oj$$1$$.$Events$.$EventType$.ADD, $newModel$$3$$, $collection$$10$$, $options$$52$$), $addedModels$$.push($newModel$$3$$)) : ($modelFoundInCollection$$1$$.$TriggerInternal$($silent$$14$$, $oj$$1$$.$Events$.$EventType$.ADD, $modelFoundInCollection$$1$$, $collection$$10$$, $options$$52$$), $addedModels$$.push($modelFoundInCollection$$1$$)));
      return $modelAdded$$;
    }
    function $doAdd$$($collection$$11$$, $model$$21_modelAdded$$1$$, $deferred$$5$$) {
      $added$$ = !1;
      var $newModel$$4$$ = $collection$$11$$.$_newModel$($model$$21_modelAdded$$1$$, $options$$52$$, !1), $modelToTryAndMerge$$1$$ = null, $modelFoundInCollection$$2$$ = null;
      if (null != $newModel$$4$$) {
        $index$$57$$ = -1;
        $newModel$$4$$.$SetupId$();
        $modelToTryAndMerge$$1$$ = $model$$21_modelAdded$$1$$ instanceof $oj$$1$$.$Model$ ? $model$$21_modelAdded$$1$$ : $newModel$$4$$;
        if ($deferred$$5$$) {
          return $force$$ ? new Promise(function($resolve$$) {
            $mergeAttrs$$($collection$$11$$, $modelToTryAndMerge$$1$$, void 0, $newModel$$4$$, $deferred$$5$$);
            $resolve$$(void 0);
          }) : $collection$$11$$.$_getInternal$($modelToTryAndMerge$$1$$, {silent:!0}, $deferred$$5$$, !0).then(function($mod_modInfo$$) {
            $modelFoundInCollection$$2$$ = $mod_modInfo$$.m;
            $mod_modInfo$$ = $mergeAttrs$$($collection$$11$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$);
            $modelReturnList$$.push($mod_modInfo$$);
          });
        }
        !$force$$ && $merge$$ && ($modelFoundInCollection$$2$$ = $fillIn$$ ? $collection$$11$$.$_getLocal$($modelToTryAndMerge$$1$$) : $collection$$11$$.get($modelToTryAndMerge$$1$$));
        ($model$$21_modelAdded$$1$$ = $mergeAttrs$$($collection$$11$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$)) && $modelReturnList$$.push($model$$21_modelAdded$$1$$);
      } else {
        $modelReturnList$$.push(!1);
      }
    }
    function $_parse$$($collection$$12$$, $array$$9$$) {
      return $collection$$12$$.parse && $options$$52$$.parse && !$options$$52$$.$noparse$ ? $collection$$12$$.parse($array$$9$$) : $array$$9$$;
    }
    $options$$52$$ = $options$$52$$ || {};
    var $modelArray$$ = [], $at$$1$$ = $options$$52$$.at, $silent$$14$$ = $options$$52$$.silent, $force$$ = $options$$52$$.force, $i$$44$$, $index$$57$$, $cid$$1$$, $merge$$ = $options$$52$$.merge || !1, $sort$$ = $options$$52$$.sort, $needSort$$1$$ = !0, $added$$ = !1, $addedModels$$ = [], $modelReturnList$$ = [];
    void 0 !== $at$$1$$ && 0 > $at$$1$$ && ($at$$1$$ += this.$_getLength$() + 1);
    $m$$2$$ instanceof Array ? $modelArray$$ = $m$$2$$ : $modelArray$$.push($m$$2$$);
    if (!$fillIn$$ && (this.$IsVirtual$() || $deferred$$2$$)) {
      var $self$$5$$ = this;
      return new Promise(function($allResolve$$, $allReject$$) {
        function $doTask$$($index$$58$$) {
          return new Promise(function($resolve$$1$$, $reject$$1$$) {
            $doAdd$$($self$$5$$, $modelArray$$[$index$$58$$], !0).then(function() {
              $resolve$$1$$($index$$58$$ + 1);
            }, $reject$$1$$);
          });
        }
        var $currentStep$$ = Promise.resolve(0);
        $modelArray$$ = $_parse$$($self$$5$$, $modelArray$$);
        for ($i$$44$$ = 0;$i$$44$$ < $modelArray$$.length;$i$$44$$++) {
          $currentStep$$ = $currentStep$$.then($doTask$$);
        }
        $currentStep$$.then(function() {
          0 < $addedModels$$.length && $self$$5$$.$TriggerInternal$($options$$52$$.silent, $oj$$1$$.$Events$.$EventType$.ALLADDED, $self$$5$$, $addedModels$$, $options$$52$$);
          $allResolve$$($oj$$1$$.$Collection$.$_returnModels$($modelReturnList$$));
        }, $allReject$$);
      });
    }
    $modelArray$$ = $_parse$$(this, $modelArray$$);
    for ($i$$44$$ = 0;$i$$44$$ < $modelArray$$.length;$i$$44$$++) {
      $doAdd$$(this, $modelArray$$[$i$$44$$], !1);
    }
    0 < $addedModels$$.length && this.$TriggerInternal$($options$$52$$.silent, $oj$$1$$.$Events$.$EventType$.ALLADDED, this, $addedModels$$, $options$$52$$);
    return $oj$$1$$.$Collection$.$_returnModels$($modelReturnList$$);
  };
  $oj$$1$$.$Collection$.$_returnModels$ = function $$oj$$1$$$$Collection$$$_returnModels$$($modelReturnList$$1$$) {
    return 1 === $modelReturnList$$1$$.length ? $modelReturnList$$1$$[0] : $modelReturnList$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_hasComparator$ = function $$oj$$1$$$$Collection$$$$_hasComparator$$() {
    return $oj$$1$$.$Collection$.$_defined$(this.comparator);
  };
  $oj$$1$$.$Collection$.prototype.sort = function $$oj$$1$$$$Collection$$$sort$($options$$53$$) {
    $options$$53$$ = $options$$53$$ || {};
    var $silent$$15_startIndex$$ = $options$$53$$.silent, $comparator$$2$$ = this.comparator, $self$$6$$;
    if (!this.$_hasComparator$()) {
      return null;
    }
    if (this.$IsVirtual$()) {
      var $eventOpts_totalResults$$ = this.totalResults;
      this.$_hasTotalResults$() ? this.$_setModels$(Array($eventOpts_totalResults$$), !0) : (this.$_setModels$([], !0), this.$_resetLRU$(), this.$_setLength$());
      $eventOpts_totalResults$$ = $options$$53$$.add ? {add:!0} : null;
      this.$TriggerInternal$($silent$$15_startIndex$$, $oj$$1$$.$Events$.$EventType$.SORT, this, $eventOpts_totalResults$$, null);
      $silent$$15_startIndex$$ = $options$$53$$.startIndex;
      return void 0 !== $silent$$15_startIndex$$ && null !== $silent$$15_startIndex$$ ? this.$setRangeLocal$($silent$$15_startIndex$$, this.$_getFetchSize$($options$$53$$)) : null;
    }
    $self$$6$$ = this;
    this.$_getModels$().sort(function($a$$83$$, $b$$45$$) {
      return $oj$$1$$.$Collection$.$SortFunc$($a$$83$$, $b$$45$$, $comparator$$2$$, $self$$6$$, $self$$6$$);
    });
    this.$_realignModelIndices$(0);
    $eventOpts_totalResults$$ = $options$$53$$.add ? {add:!0} : null;
    this.$TriggerInternal$($silent$$15_startIndex$$, $oj$$1$$.$Events$.$EventType$.SORT, this, $eventOpts_totalResults$$, null);
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sort", {sort:$oj$$1$$.$Collection$.prototype.sort});
  $oj$$1$$.$Collection$.$_getKey$ = function $$oj$$1$$$$Collection$$$_getKey$$($val$$17$$, $attr$$8$$) {
    return $val$$17$$ instanceof $oj$$1$$.$Model$ ? $val$$17$$.get($attr$$8$$) : $oj$$1$$.$Model$.$GetPropValue$($val$$17$$, $attr$$8$$);
  };
  $oj$$1$$.$Collection$.$SortFunc$ = function $$oj$$1$$$$Collection$$$SortFunc$$($a$$84$$, $b$$46$$, $attrs$$12_comparator$$3$$, $collection$$13$$, $self$$7$$) {
    var $attrs1_keyA$$, $keyB_retVal$$2$$, $i$$45$$;
    if ($$$$1$$.isFunction($attrs$$12_comparator$$3$$)) {
      if (1 === $attrs$$12_comparator$$3$$.length) {
        $attrs1_keyA$$ = $attrs$$12_comparator$$3$$.call($self$$7$$, $a$$84$$);
        $keyB_retVal$$2$$ = $attrs$$12_comparator$$3$$.call($self$$7$$, $b$$46$$);
        $attrs1_keyA$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1_keyA$$) ? $attrs1_keyA$$.split(",") : [$attrs1_keyA$$];
        var $attrs2$$ = $oj$$1$$.$StringUtils$.$isString$($keyB_retVal$$2$$) ? $keyB_retVal$$2$$.split(",") : [$keyB_retVal$$2$$];
        for ($i$$45$$ = 0;$i$$45$$ < $attrs1_keyA$$.length;$i$$45$$++) {
          if ($keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$[$i$$45$$], $attrs2$$[$i$$45$$], $collection$$13$$.sortDirection), 0 !== $keyB_retVal$$2$$) {
            return $keyB_retVal$$2$$;
          }
        }
      }
      return $attrs$$12_comparator$$3$$.call($self$$7$$, $a$$84$$, $b$$46$$);
    }
    if ($oj$$1$$.$StringUtils$.$isString$($attrs$$12_comparator$$3$$)) {
      for ($attrs$$12_comparator$$3$$ = $attrs$$12_comparator$$3$$.split(","), $i$$45$$ = 0;$i$$45$$ < $attrs$$12_comparator$$3$$.length;$i$$45$$++) {
        if ($attrs1_keyA$$ = $oj$$1$$.$Collection$.$_getKey$($a$$84$$, $attrs$$12_comparator$$3$$[$i$$45$$]), $keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_getKey$($b$$46$$, $attrs$$12_comparator$$3$$[$i$$45$$]), $keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$, $keyB_retVal$$2$$, $collection$$13$$.sortDirection), 0 !== $keyB_retVal$$2$$) {
          return $keyB_retVal$$2$$;
        }
      }
    }
    return 0;
  };
  $oj$$1$$.$Collection$.prototype.$sortedIndex$ = function $$oj$$1$$$$Collection$$$$sortedIndex$$($model$$22$$, $comparator$$4$$) {
    var $comp$$ = $comparator$$4$$ ? $comparator$$4$$ : this.comparator, $self$$8$$;
    if (!$comp$$) {
      return-1;
    }
    this.$_throwErrIfVirtual$("sortedIndex");
    $self$$8$$ = this;
    return $oj$$1$$.$Collection$.$_find$(this.$_getModels$(), $model$$22$$, function($a$$85$$, $b$$47$$) {
      var $attrs1$$1_keyA$$1$$, $attrs2$$1_keyB$$1$$;
      if ($$$$1$$.isFunction($comp$$)) {
        if (1 === $comp$$.length) {
          $attrs1$$1_keyA$$1$$ = $comp$$.call($self$$8$$, $a$$85$$);
          $attrs2$$1_keyB$$1$$ = $comp$$.call($self$$8$$, $b$$47$$);
          $attrs1$$1_keyA$$1$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1$$1_keyA$$1$$) ? $attrs1$$1_keyA$$1$$.split(",") : [$attrs1$$1_keyA$$1$$];
          $attrs2$$1_keyB$$1$$ = $oj$$1$$.$StringUtils$.$isString$($attrs2$$1_keyB$$1$$) ? $attrs2$$1_keyB$$1$$.split(",") : [$attrs2$$1_keyB$$1$$];
          var $retVal$$3$$, $i$$46$$;
          for ($i$$46$$ = 0;$i$$46$$ < $attrs1$$1_keyA$$1$$.length;$i$$46$$++) {
            if ($retVal$$3$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1$$1_keyA$$1$$[$i$$46$$], $attrs2$$1_keyB$$1$$[$i$$46$$], $self$$8$$.sortDirection), 0 !== $retVal$$3$$) {
              return $retVal$$3$$;
            }
          }
        }
        return $comp$$.call($self$$8$$, $a$$85$$, $b$$47$$);
      }
      return $oj$$1$$.$StringUtils$.$isString$($comp$$) ? ($attrs1$$1_keyA$$1$$ = $a$$85$$.get($comp$$), $attrs2$$1_keyB$$1$$ = $b$$47$$.get($comp$$), $oj$$1$$.$Collection$.$_compareKeys$($attrs1$$1_keyA$$1$$, $attrs2$$1_keyB$$1$$, $self$$8$$.sortDirection)) : 0;
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortedIndex", {$sortedIndex$:$oj$$1$$.$Collection$.prototype.$sortedIndex$});
  $oj$$1$$.$Collection$.$_find$ = function $$oj$$1$$$$Collection$$$_find$$($modelArray$$1$$, $model$$23$$, $comparator$$5$$) {
    function $search$$($min$$, $max$$) {
      var $cid$$2_mid$$, $id$$5$$;
      if ($min$$ > $max$$) {
        return-1;
      }
      $cid$$2_mid$$ = $model$$23$$.$GetCid$();
      $id$$5$$ = $model$$23$$.$GetId$();
      if ($modelArray$$1$$[$min$$].$Match$($id$$5$$, $cid$$2_mid$$)) {
        return $min$$;
      }
      if ($modelArray$$1$$[$max$$].$Match$($id$$5$$, $cid$$2_mid$$)) {
        return $max$$;
      }
      $cid$$2_mid$$ = Math.floor(($max$$ + $min$$) / 2);
      return-1 === $comparator$$5$$($modelArray$$1$$[$cid$$2_mid$$], $model$$23$$) ? $search$$($min$$ + 1, $cid$$2_mid$$) : 1 === $comparator$$5$$($modelArray$$1$$[$cid$$2_mid$$], $model$$23$$) ? $search$$($cid$$2_mid$$, $max$$ - 1) : $cid$$2_mid$$;
    }
    return $search$$(0, $modelArray$$1$$.length - 1);
  };
  $oj$$1$$.$Collection$.$_compareKeys$ = function $$oj$$1$$$$Collection$$$_compareKeys$$($keyA$$2$$, $keyB$$2$$, $sortDirection$$) {
    if (-1 === $sortDirection$$) {
      if ($keyA$$2$$ < $keyB$$2$$) {
        return 1;
      }
      if ($keyB$$2$$ < $keyA$$2$$) {
        return-1;
      }
    } else {
      if ($keyA$$2$$ > $keyB$$2$$) {
        return 1;
      }
      if ($keyB$$2$$ > $keyA$$2$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$1$$.$Collection$.prototype.unshift = function $$oj$$1$$$$Collection$$$unshift$($m$$3$$, $options$$54$$) {
    var $opt$$4$$ = {};
    $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$4$$, $options$$54$$ || {});
    $opt$$4$$.at || ($opt$$4$$.at = 0);
    this.$_manageLRU$(1);
    return this.$_handlePromise$(this.$_addInternal$($m$$3$$, $opt$$4$$, !1, $opt$$4$$.deferred));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.unshift", {unshift:$oj$$1$$.$Collection$.prototype.unshift});
  $oj$$1$$.$Collection$.prototype.$_handlePromise$ = function $$oj$$1$$$$Collection$$$$_handlePromise$$($result$$) {
    return $$$$1$$.isFunction($result$$.then) ? this.$_addPromise$(function() {
      return $result$$;
    }) : $result$$;
  };
  $oj$$1$$.$Collection$.prototype.shift = function $$oj$$1$$$$Collection$$$shift$($options$$55$$) {
    var $deferred$$6$$ = this.$_getDeferred$($options$$55$$);
    if (this.$IsVirtual$() || $deferred$$6$$) {
      var $self$$9$$ = this;
      return this.at(0, $options$$55$$).then(function($model$$24$$) {
        return $self$$9$$.$_removeInternal$($model$$24$$, 0, $options$$55$$);
      });
    }
    return this.$_removeInternal$(this.at(0), 0, $options$$55$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.shift", {shift:$oj$$1$$.$Collection$.prototype.shift});
  $oj$$1$$.$Collection$.prototype.$initial$ = function $$oj$$1$$$$Collection$$$$initial$$($n$$3$$) {
    void 0 === $n$$3$$ && ($n$$3$$ = 1);
    this.$_throwErrIfVirtual$("initial");
    var $array$$10$$ = [], $i$$47$$;
    for ($i$$47$$ = 0;$i$$47$$ < this.$_getLength$() - $n$$3$$;$i$$47$$ += 1) {
      $array$$10$$.push(this.at($i$$47$$));
    }
    return $array$$10$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.initial", {$initial$:$oj$$1$$.$Collection$.prototype.$initial$});
  $oj$$1$$.$Collection$.prototype.$_getDeferred$ = function $$oj$$1$$$$Collection$$$$_getDeferred$$($options$$56$$) {
    return($options$$56$$ || {}).deferred;
  };
  $oj$$1$$.$Collection$.prototype.last = function $$oj$$1$$$$Collection$$$last$($n$$4$$, $options$$57$$) {
    var $deferred$$7_i$$48$$ = this.$_getDeferred$($options$$57$$);
    void 0 === $n$$4$$ && ($n$$4$$ = 1);
    if (1 === $n$$4$$) {
      var $len$$1$$ = this.$_getModelsLength$();
      0 === $len$$1$$ && ($len$$1$$ = $n$$4$$);
      return 0 < $len$$1$$ ? this.at($len$$1$$ - 1, $deferred$$7_i$$48$$) : null;
    }
    var $array$$11$$ = [], $len$$1$$ = this.$_getLength$();
    if ($deferred$$7_i$$48$$ || this.$IsVirtual$()) {
      var $start$$12$$ = $len$$1$$ - $n$$4$$;
      0 > $start$$12$$ && ($start$$12$$ = 0);
      0 === $len$$1$$ && ($len$$1$$ = $n$$4$$);
      return this.$_addPromise$(function() {
        return this.$IterativeAt$($start$$12$$, $len$$1$$);
      });
    }
    for ($deferred$$7_i$$48$$ = $len$$1$$ - $n$$4$$;$deferred$$7_i$$48$$ < $len$$1$$;$deferred$$7_i$$48$$ += 1) {
      $array$$11$$.push(this.at($deferred$$7_i$$48$$));
    }
    return $array$$11$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.last", {last:$oj$$1$$.$Collection$.prototype.last});
  $oj$$1$$.$Collection$.prototype.$IterativeAt$ = function $$oj$$1$$$$Collection$$$$IterativeAt$$($start$$13$$, $end$$5$$) {
    var $array$$12$$ = [], $i$$49$$, $self$$10$$ = this;
    return new Promise(function($allResolve$$1$$, $allReject$$1$$) {
      function $doTask$$1$$($index$$59$$) {
        return new Promise(function($resolve$$2$$, $reject$$2$$) {
          $self$$10$$.$_deferredAt$($index$$59$$, null).then(function($model$$25$$) {
            $array$$12$$.push($model$$25$$);
            $resolve$$2$$($index$$59$$ + 1);
          }, $reject$$2$$);
        });
      }
      var $currentStep$$1$$ = Promise.resolve($start$$13$$);
      for ($i$$49$$ = $start$$13$$;$i$$49$$ < $end$$5$$;$i$$49$$++) {
        $currentStep$$1$$ = $currentStep$$1$$.then($doTask$$1$$);
      }
      $currentStep$$1$$.then(function() {
        $allResolve$$1$$($array$$12$$);
      }, $allReject$$1$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_getDefaultFetchSize$ = function $$oj$$1$$$$Collection$$$$_getDefaultFetchSize$$($n$$5$$) {
    return void 0 === $n$$5$$ || null === $n$$5$$ ? this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] : $n$$5$$;
  };
  $oj$$1$$.$Collection$.prototype.$_calculateNextStart$ = function $$oj$$1$$$$Collection$$$$_calculateNextStart$$() {
    var $lastFetch$$ = this.lastFetchCount;
    if (void 0 === $lastFetch$$ || null === $lastFetch$$) {
      $lastFetch$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$];
    }
    return void 0 === this.offset || null === this.offset ? $lastFetch$$ : this.offset + $lastFetch$$;
  };
  $oj$$1$$.$Collection$.prototype.next = function $$oj$$1$$$$Collection$$$next$($n$$6$$, $options$$58$$) {
    $options$$58$$ = $options$$58$$ || {};
    $options$$58$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$6$$);
    var $start$$14$$ = this.$_calculateNextStart$(), $length$$11$$ = this.$_getLength$();
    if (0 === $length$$11$$ && 0 < $options$$58$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]) {
      $start$$14$$ = 0;
    } else {
      if ($start$$14$$ >= $length$$11$$) {
        return $options$$58$$.success && $options$$58$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$58$$, this), this, null, $options$$58$$), null;
      }
    }
    $options$$58$$.startIndex = $start$$14$$;
    return this.fetch($options$$58$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.next", {next:$oj$$1$$.$Collection$.prototype.next});
  $oj$$1$$.$Collection$.prototype.$_calculatePrevStart$ = function $$oj$$1$$$$Collection$$$$_calculatePrevStart$$($n$$7$$) {
    return void 0 === this.offset || null === this.offset ? 0 : this.offset - $n$$7$$;
  };
  $oj$$1$$.$Collection$.prototype.$previous$ = function $$oj$$1$$$$Collection$$$$previous$$($n$$8$$, $options$$59$$) {
    $options$$59$$ = $options$$59$$ || {};
    if (0 === this.offset) {
      return $options$$59$$.success && this.lastFetchCount && $options$$59$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$59$$, this), this, null, $options$$59$$), null;
    }
    $options$$59$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$8$$);
    var $start$$15$$ = this.$_calculatePrevStart$($options$$59$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]);
    0 > $start$$15$$ && ($options$$59$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.offset, $start$$15$$ = 0);
    $options$$59$$.startIndex = $start$$15$$;
    return this.fetch($options$$59$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.previous", {$previous$:$oj$$1$$.$Collection$.prototype.$previous$});
  $oj$$1$$.$Collection$.prototype.$setModelLimit$ = function $$oj$$1$$$$Collection$$$$setModelLimit$$($n$$9$$) {
    this.modelLimit = $n$$9$$;
    this.$_manageLRU$(0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setModelLimit", {$setModelLimit$:$oj$$1$$.$Collection$.prototype.$setModelLimit$});
  $oj$$1$$.$Collection$.prototype.$_getModelLimit$ = function $$oj$$1$$$$Collection$$$$_getModelLimit$$() {
    return this.modelLimit;
  };
  $oj$$1$$.$Collection$.prototype.$setFetchSize$ = function $$oj$$1$$$$Collection$$$$setFetchSize$$($n$$10$$) {
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = $n$$10$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setFetchSize", {$setFetchSize$:$oj$$1$$.$Collection$.prototype.$setFetchSize$});
  $oj$$1$$.$Collection$.prototype.$rest$ = function $$oj$$1$$$$Collection$$$$rest$$($n$$11$$, $options$$60$$) {
    var $deferred$$8_i$$50$$ = this.$_getDeferred$($options$$60$$);
    void 0 === $n$$11$$ && ($n$$11$$ = 1);
    var $array$$13$$ = [];
    if (this.$IsVirtual$() || $deferred$$8_i$$50$$) {
      return this.$_addPromise$(function() {
        return this.$IterativeAt$($n$$11$$, this.$_getLength$());
      });
    }
    for ($deferred$$8_i$$50$$ = $n$$11$$;$deferred$$8_i$$50$$ < this.$_getLength$();$deferred$$8_i$$50$$ += 1) {
      $array$$13$$.push(this.at($deferred$$8_i$$50$$));
    }
    return $array$$13$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.rest", {$rest$:$oj$$1$$.$Collection$.prototype.$rest$});
  $oj$$1$$.$Collection$.prototype.remove = function $$oj$$1$$$$Collection$$$remove$($m$$4$$, $options$$61$$) {
    $options$$61$$ = $options$$61$$ || {};
    var $modArray$$ = [], $mod$$1$$;
    $m$$4$$ instanceof Array ? $modArray$$ = $m$$4$$ : $modArray$$.push($m$$4$$);
    var $modsRemoved$$ = [];
    for ($mod$$1$$ = $modArray$$.length - 1;0 <= $mod$$1$$;$mod$$1$$ -= 1) {
      $modsRemoved$$.unshift(this.$_removeInternal$($modArray$$[$mod$$1$$], -1, $options$$61$$));
    }
    this.$TriggerInternal$($options$$61$$.silent, $oj$$1$$.$Events$.$EventType$.ALLREMOVED, this, $modArray$$, $options$$61$$);
    return $oj$$1$$.$Collection$.$_returnModels$($modsRemoved$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.remove", {remove:$oj$$1$$.$Collection$.prototype.remove});
  $oj$$1$$.$Collection$.prototype.$_removeInternal$ = function $$oj$$1$$$$Collection$$$$_removeInternal$$($modInfo$$1_model$$27$$, $index$$60$$, $options$$62$$) {
    $options$$62$$ = $options$$62$$ || {};
    $modInfo$$1_model$$27$$ = -1 == $index$$60$$ ? this.$_getInternal$($modInfo$$1_model$$27$$) : $oj$$1$$.$Collection$.$_getModinfo$($index$$60$$, $modInfo$$1_model$$27$$);
    var $silent$$16$$ = $options$$62$$.silent;
    $index$$60$$ = $modInfo$$1_model$$27$$.index;
    if (-1 < $index$$60$$) {
      var $mod$$2$$ = $modInfo$$1_model$$27$$.m;
      void 0 !== $mod$$2$$ && $mod$$2$$.$GetCollection$() === this && $mod$$2$$.$SetCollection$(null);
      this.$_spliceModels$($index$$60$$, 1);
      this.$_setLength$();
      var $opt$$6$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$6$$, $options$$62$$);
      $opt$$6$$.index = $index$$60$$;
      void 0 !== $mod$$2$$ && $mod$$2$$.$TriggerInternal$($silent$$16$$, $oj$$1$$.$Events$.$EventType$.REMOVE, $mod$$2$$, this, $opt$$6$$);
      this.$_unlistenToModel$($mod$$2$$);
    }
    return $modInfo$$1_model$$27$$.m;
  };
  $oj$$1$$.$Collection$.prototype.$_unlistenToModel$ = function $$oj$$1$$$$Collection$$$$_unlistenToModel$$($m$$5$$) {
    void 0 !== $m$$5$$ && $m$$5$$.off(null, null, this);
  };
  $oj$$1$$.$Collection$.prototype.$_listenToModel$ = function $$oj$$1$$$$Collection$$$$_listenToModel$$($m$$6$$) {
    $m$$6$$.$OnInternal$($oj$$1$$.$Events$.$EventType$.ALL, this.$_modelEvent$, this, !1, !0);
  };
  $oj$$1$$.$Collection$.prototype.$_modelEvent$ = function $$oj$$1$$$$Collection$$$$_modelEvent$$($event$$14$$, $model$$28$$, $collection$$14$$, $options$$63$$) {
    $event$$14$$ === $oj$$1$$.$Events$.$EventType$.DESTROY && this.remove($model$$28$$);
    void 0 !== $collection$$14$$ && $collection$$14$$ instanceof $oj$$1$$.$Collection$ && $collection$$14$$ !== this || (Array.prototype.slice.call(arguments), this.$TriggerInternal$($options$$63$$ && $options$$63$$.silent, $event$$14$$, $model$$28$$, $collection$$14$$, $options$$63$$));
  };
  $oj$$1$$.$Collection$.prototype.refresh = function $$oj$$1$$$$Collection$$$refresh$($options$$64$$) {
    $options$$64$$ = $options$$64$$ || {};
    var $self$$13$$ = this;
    return this.$_addPromise$(function() {
      return new Promise(function($resolve$$3$$, $reject$$3$$) {
        if (!$self$$13$$.$IsVirtual$()) {
          var $silent$$18$$ = void 0 !== $options$$64$$.silent && $options$$64$$.silent;
          try {
            $self$$13$$.reset(null, {silent:!0});
            var $opt$$7_startIndex$$1$$ = {}, $prop$$43$$;
            for ($prop$$43$$ in $options$$64$$) {
              $options$$64$$.hasOwnProperty($prop$$43$$) && ($opt$$7_startIndex$$1$$[$prop$$43$$] = $options$$64$$[$prop$$43$$]);
            }
            $opt$$7_startIndex$$1$$.success = function $$opt$$7_startIndex$$1$$$success$($collection$$15$$, $response$$1$$, $options$$65$$) {
              $self$$13$$.$TriggerInternal$($silent$$18$$, $oj$$1$$.$Events$.$EventType$.REFRESH, $self$$13$$, $options$$65$$, null);
              $resolve$$3$$({collection:$collection$$15$$, response:$response$$1$$, options:$options$$65$$});
            };
            $opt$$7_startIndex$$1$$.error = function $$opt$$7_startIndex$$1$$$error$($xhr$$10$$, $status$$6$$, $error$$4$$) {
              $reject$$3$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$10$$, $status$$6$$, $error$$4$$, $self$$13$$, $options$$64$$));
            };
            $self$$13$$.fetch($opt$$7_startIndex$$1$$);
            return;
          } catch ($e$$19$$) {
            if ($e$$19$$ instanceof $oj$$1$$.$URLError$) {
              $self$$13$$.$TriggerInternal$($silent$$18$$, $oj$$1$$.$Events$.$EventType$.REFRESH, $self$$13$$, $options$$64$$, null);
              $resolve$$3$$({collection:$self$$13$$, options:$options$$64$$});
              return;
            }
            throw $e$$19$$;
          }
        }
        $opt$$7_startIndex$$1$$ = $options$$64$$.startIndex;
        $self$$13$$.$_setModels$([], !0);
        $self$$13$$.$_resetLRU$();
        $self$$13$$.totalResults = void 0;
        $self$$13$$.$_setLength$();
        $silent$$18$$ = void 0 !== $options$$64$$.silent && $options$$64$$.silent;
        $self$$13$$.$TriggerInternal$($silent$$18$$, $oj$$1$$.$Events$.$EventType$.REFRESH, $self$$13$$, $options$$64$$, null);
        if (void 0 === $opt$$7_startIndex$$1$$ || null === $opt$$7_startIndex$$1$$) {
          $opt$$7_startIndex$$1$$ = 0;
        }
        void 0 !== $opt$$7_startIndex$$1$$ && null !== $opt$$7_startIndex$$1$$ ? $self$$13$$.$_setRangeLocalInternal$($opt$$7_startIndex$$1$$, $self$$13$$.$_getFetchSize$($options$$64$$)).then(function($actual$$) {
          $resolve$$3$$($actual$$);
        }) : $resolve$$3$$(void 0);
      });
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.refresh", {refresh:$oj$$1$$.$Collection$.prototype.refresh});
  $oj$$1$$.$Collection$.prototype.reset = function $$oj$$1$$$$Collection$$$reset$($data$$34$$, $options$$66$$) {
    var $opts$$5$$ = {};
    $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$5$$, $options$$66$$ || {});
    $opts$$5$$.previousModels = this.$_getModels$();
    for (var $index$$61_model$$29_retObj$$5$$, $i$$51_silent$$19$$ = 0;$i$$51_silent$$19$$ < this.$_modelIndices$.length;$i$$51_silent$$19$$++) {
      if ($index$$61_model$$29_retObj$$5$$ = this.$_modelIndices$[$i$$51_silent$$19$$], $index$$61_model$$29_retObj$$5$$ = this.$_getModel$($index$$61_model$$29_retObj$$5$$)) {
        this.$_unlistenToModel$($index$$61_model$$29_retObj$$5$$), $index$$61_model$$29_retObj$$5$$.$SetCollection$(null);
      }
    }
    this.$_setModels$([], !0);
    this.$_resetLRU$();
    $i$$51_silent$$19$$ = void 0 !== $opts$$5$$.silent && $opts$$5$$.silent;
    if (!$data$$34$$) {
      return this.totalResults = void 0, this.$_setLength$(), this.$TriggerInternal$($i$$51_silent$$19$$, $oj$$1$$.$Events$.$EventType$.RESET, this, $opts$$5$$, null), null;
    }
    $index$$61_model$$29_retObj$$5$$ = null;
    $opts$$5$$.parse && ($data$$34$$ = this.parse($data$$34$$));
    this.$_manageLRU$($data$$34$$ instanceof Array ? $data$$34$$.length : 1);
    $opts$$5$$.$noparse$ = !0;
    $index$$61_model$$29_retObj$$5$$ = this.$_addInternal$($data$$34$$, $opts$$5$$, !0, !1);
    this.$_setLength$();
    this.$TriggerInternal$($i$$51_silent$$19$$, $oj$$1$$.$Events$.$EventType$.RESET, this, $opts$$5$$, null);
    return this.$_handlePromise$($index$$61_model$$29_retObj$$5$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.reset", {reset:$oj$$1$$.$Collection$.prototype.reset});
  $oj$$1$$.$Collection$.prototype.at = function $$oj$$1$$$$Collection$$$at$($index$$62$$, $options$$67$$) {
    return this.$_atInternal$($index$$62$$, $options$$67$$, !1, this.$_getDeferred$($options$$67$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.at", {at:$oj$$1$$.$Collection$.prototype.at});
  $oj$$1$$.$Collection$.prototype.$_atInternal$ = function $$oj$$1$$$$Collection$$$$_atInternal$$($index$$63$$, $options$$68$$, $local$$, $deferred$$10$$) {
    0 > $index$$63$$ && ($index$$63$$ += this.$_getLength$());
    return 0 > $index$$63$$ || this.$_overUpperLimit$($index$$63$$) ? null : $local$$ || !this.$IsVirtual$() && !$deferred$$10$$ ? this.$_getModel$($index$$63$$) : this.$_addPromise$(function() {
      return this.$_deferredAt$($index$$63$$, $options$$68$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$whenReady$ = function $$oj$$1$$$$Collection$$$$whenReady$$() {
    return this.$_promises$ ? this.$_promises$ : Promise.resolve();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.whenReady", {$whenReady$:$oj$$1$$.$Collection$.prototype.$whenReady$});
  $oj$$1$$.$Collection$.prototype.$_addPromise$ = function $$oj$$1$$$$Collection$$$$_addPromise$$($promiseTask$$) {
    var $self$$14$$ = this;
    void 0 === this.$_promises$ && (this.$_promiseCount$ = 0, this.$_promises$ = Promise.resolve());
    this.$_promiseCount$++;
    return this.$_promises$ = this.$_promises$.then($promiseTask$$.bind($self$$14$$)).then(function($arg$$10$$) {
      $self$$14$$.$_promiseCount$--;
      0 === $self$$14$$.$_promiseCount$ && ($self$$14$$.$_promises$ = void 0, $self$$14$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.READY, $self$$14$$, null, null));
      return $arg$$10$$;
    }, function($error$$5$$) {
      $self$$14$$.$_promiseCount$--;
      0 === $self$$14$$.$_promiseCount$ && ($self$$14$$.$_promises$ = void 0);
      return Promise.reject($error$$5$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_deferredAt$ = function $$oj$$1$$$$Collection$$$$_deferredAt$$($index$$64$$, $options$$69$$) {
    var $self$$15$$ = this, $model$$30$$ = $self$$15$$.$_getModel$($index$$64$$);
    return void 0 === $model$$30$$ ? new Promise(function($resolve$$4$$, $reject$$4$$) {
      var $opts$$6$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$6$$, $options$$69$$ || {});
      $opts$$6$$.context = $self$$15$$;
      $opts$$6$$.startIndex = $index$$64$$;
      $opts$$6$$.error = function $$opts$$6$$$error$($xhr$$11$$, $status$$7$$, $error$$6$$) {
        $reject$$4$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$11$$, $status$$7$$, $error$$6$$, $self$$15$$, $options$$69$$));
      };
      $opts$$6$$.success = function $$opts$$6$$$success$() {
        $resolve$$4$$($self$$15$$.$_getModel$($index$$64$$));
      };
      $self$$15$$.$_fetchInternal$($opts$$6$$, -1, !1);
    }) : new Promise(function($resolve$$5$$) {
      $resolve$$5$$($model$$30$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$getByCid$ = function $$oj$$1$$$$Collection$$$$getByCid$$($clientId$$) {
    for (var $models$$5$$ = this.$_getModels$(), $index$$65$$, $foundModel$$ = null, $i$$52$$ = 0;$i$$52$$ < this.$_modelIndices$.length;$i$$52$$++) {
      if ($index$$65$$ = this.$_modelIndices$[$i$$52$$], $models$$5$$[$index$$65$$] && $clientId$$ === $models$$5$$[$index$$65$$].cid) {
        $foundModel$$ = $models$$5$$[$index$$65$$];
        break;
      }
    }
    if ($foundModel$$) {
      return $foundModel$$;
    }
    if (this.$IsVirtual$()) {
      throw Error("Not found locally and not supported by server for virtual collections");
    }
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.getByCid", {$getByCid$:$oj$$1$$.$Collection$.prototype.$getByCid$});
  $oj$$1$$.$Collection$.prototype.get = function $$oj$$1$$$$Collection$$$get$($id$$6$$, $options$$70$$) {
    var $internalGet$$ = this.$_getInternal$($id$$6$$, $options$$70$$, this.$_getDeferred$($options$$70$$));
    if ($internalGet$$) {
      if ($$$$1$$.isFunction($internalGet$$.then)) {
        return this.$_addPromise$(function() {
          return new Promise(function($resolve$$6$$, $reject$$6$$) {
            $internalGet$$.then(function($modInfo$$2$$) {
              $resolve$$6$$($modInfo$$2$$.m);
            }, function($err$$4$$) {
              $reject$$6$$($err$$4$$);
            });
          });
        });
      }
      if (this.$IsVirtual$()) {
        return this.$_addPromise$(function() {
          return new Promise(function($resolve$$7$$) {
            $resolve$$7$$($internalGet$$.m);
          });
        });
      }
      if ($internalGet$$.hasOwnProperty("m")) {
        return $internalGet$$.m;
      }
    }
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.get", {get:$oj$$1$$.$Collection$.prototype.get});
  $oj$$1$$.$Collection$.prototype.$_getLocal$ = function $$oj$$1$$$$Collection$$$$_getLocal$$($id$$7_internalGet$$1$$) {
    return($id$$7_internalGet$$1$$ = this.$_getLocalInternal$($id$$7_internalGet$$1$$)) ? $id$$7_internalGet$$1$$.m : null;
  };
  $oj$$1$$.$Collection$.prototype.$_getLocalInternal$ = function $$oj$$1$$$$Collection$$$$_getLocalInternal$$($id$$8$$) {
    var $cid$$3$$ = $id$$8$$;
    $id$$8$$ instanceof $oj$$1$$.$Model$ ? ($cid$$3$$ = $id$$8$$.$GetCid$(), $id$$8$$ = $id$$8$$.$GetId$()) : $oj$$1$$.$Collection$.$_defined$($id$$8$$) && void 0 !== $id$$8$$.id && ($id$$8$$ = $id$$8$$.id);
    for (var $foundObj$$ = null, $len$$2$$ = this.$_modelIndices$.length, $model$$31$$, $models$$6$$ = this.$_getModels$(), $index$$66$$, $i$$53$$ = 0;$i$$53$$ < $len$$2$$;$i$$53$$++) {
      if ($index$$66$$ = this.$_modelIndices$[$i$$53$$], $model$$31$$ = $models$$6$$[$index$$66$$], void 0 !== $model$$31$$ && $model$$31$$.$Match$($id$$8$$, $cid$$3$$)) {
        $foundObj$$ = $oj$$1$$.$Collection$.$_getModinfo$($index$$66$$, $model$$31$$);
        break;
      }
    }
    return $foundObj$$ ? $foundObj$$ : $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
  };
  $oj$$1$$.$Collection$.prototype.$_getInternal$ = function $$oj$$1$$$$Collection$$$$_getInternal$$($id$$9$$, $options$$71$$, $deferred$$12$$, $fillIn$$1$$) {
    var $cid$$4$$ = $id$$9$$;
    void 0 === $fillIn$$1$$ && ($fillIn$$1$$ = !1);
    $id$$9$$ instanceof $oj$$1$$.$Model$ ? ($cid$$4$$ = $id$$9$$.$GetCid$(), $id$$9$$ = $id$$9$$.$GetId$()) : $oj$$1$$.$Collection$.$_defined$($id$$9$$) && void 0 !== $id$$9$$.id && ($id$$9$$ = $id$$9$$.id);
    for (var $foundObj$$1$$ = null, $models$$7$$ = this.$_getModels$(), $index$$67$$, $i$$54$$ = 0;$i$$54$$ < this.$_modelIndices$.length;$i$$54$$++) {
      if ($index$$67$$ = this.$_modelIndices$[$i$$54$$], $models$$7$$[$index$$67$$] && $models$$7$$[$index$$67$$].$Match$($id$$9$$, $cid$$4$$)) {
        $foundObj$$1$$ = $oj$$1$$.$Collection$.$_getModinfo$($index$$67$$, $models$$7$$[$index$$67$$]);
        break;
      }
    }
    if ($foundObj$$1$$) {
      return $deferred$$12$$ ? new Promise(function($resolve$$8$$) {
        $resolve$$8$$($foundObj$$1$$);
      }) : $foundObj$$1$$;
    }
    if (this.$IsVirtual$()) {
      if (void 0 === $id$$9$$ && void 0 !== $cid$$4$$) {
        return new Promise(function($resolve$$9$$) {
          $resolve$$9$$($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
        });
      }
      var $self$$16$$ = this;
      return new Promise(function($resolve$$10$$, $reject$$10$$) {
        var $opts$$7$$ = {};
        $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$7$$, $options$$71$$ || {});
        $opts$$7$$.context = $self$$16$$;
        $opts$$7$$.startID = $id$$9$$;
        $opts$$7$$.error = function $$opts$$7$$$error$($xhr$$12$$, $status$$8$$, $error$$7$$) {
          $reject$$10$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$12$$, $status$$8$$, $error$$7$$, $self$$16$$, $options$$71$$));
        };
        $opts$$7$$.success = function $$opts$$7$$$success$($collection$$17$$, $response$$3$$) {
          if (null != $response$$3$$) {
            var $index$$inline_373$$ = $self$$16$$.$_getOffset$(), $model$$inline_374$$ = $self$$16$$.$_getModel$($index$$inline_373$$);
            void 0 !== $model$$inline_374$$ && $model$$inline_374$$.$Match$($id$$9$$, $cid$$4$$) ? $resolve$$10$$($oj$$1$$.$Collection$.$_getModinfo$($index$$inline_373$$, $model$$inline_374$$)) : $resolve$$10$$($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
          } else {
            $resolve$$10$$($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
          }
        };
        $self$$16$$.$_fetchInternal$($opts$$7$$, -1, $fillIn$$1$$);
      });
    }
    var $undefinedModInfo$$ = $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
    return $deferred$$12$$ ? new Promise(function($resolve$$11$$) {
      $resolve$$11$$($undefinedModInfo$$);
    }) : $undefinedModInfo$$;
  };
  $oj$$1$$.$Collection$.$_getModinfo$ = function $$oj$$1$$$$Collection$$$_getModinfo$$($index$$69$$, $model$$33$$) {
    return{index:$index$$69$$, m:$model$$33$$};
  };
  $oj$$1$$.$Collection$.prototype.parse = function $$oj$$1$$$$Collection$$$parse$($response$$4$$) {
    var $prop$$44$$;
    if ($response$$4$$ instanceof Array || !$response$$4$$) {
      return $response$$4$$;
    }
    for ($prop$$44$$ in $response$$4$$) {
      if ($response$$4$$.hasOwnProperty($prop$$44$$) && $response$$4$$[$prop$$44$$] instanceof Array) {
        return $response$$4$$[$prop$$44$$];
      }
    }
    return $response$$4$$;
  };
  $oj$$1$$.$Collection$.prototype.$_checkActual$ = function $$oj$$1$$$$Collection$$$$_checkActual$$($start$$16$$, $count$$12$$, $actual$$1$$) {
    return this.$_hasTotalResults$() && 0 < this.totalResults && $actual$$1$$.start + $actual$$1$$.count >= this.totalResults ? !0 : $actual$$1$$.start === $start$$16$$ && $actual$$1$$.count === $count$$12$$;
  };
  $oj$$1$$.$Collection$.prototype.$setRangeLocal$ = function $$oj$$1$$$$Collection$$$$setRangeLocal$$($start$$17$$, $count$$13$$) {
    var $self$$17$$ = this;
    return this.$_addPromise$(function() {
      return $self$$17$$.$_setRangeLocalInternal$($start$$17$$, $count$$13$$);
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setRangeLocal", {$setRangeLocal$:$oj$$1$$.$Collection$.prototype.$setRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_setRangeLocalInternal$ = function $$oj$$1$$$$Collection$$$$_setRangeLocalInternal$$($start$$18$$, $count$$14$$) {
    this.$IsVirtual$() && this.$_resetModelsToFullLength$();
    var $actual$$2$$ = this.$_getLocalRange$($start$$18$$, $count$$14$$), $self$$18$$ = this;
    if (this.$_checkActual$($start$$18$$, $count$$14$$, $actual$$2$$)) {
      return new Promise(function($resolve$$12$$) {
        $resolve$$12$$($actual$$2$$);
      });
    }
    var $modelLimit$$ = this.$_getModelLimit$();
    -1 < $modelLimit$$ && $modelLimit$$ < $count$$14$$ && (this.modelLimit = $count$$14$$);
    return new Promise(function($resolve$$13$$, $reject$$13$$) {
      $self$$18$$.$_setRangeLocalFetch$($start$$18$$, $count$$14$$, -1, {start:$start$$18$$, count:$count$$14$$}, $resolve$$13$$, $reject$$13$$, !0);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_setRangeLocalFetch$ = function $$oj$$1$$$$Collection$$$$_setRangeLocalFetch$$($start$$19$$, $count$$15$$, $actual$$3_placement$$, $original$$2$$, $resolve$$14$$, $reject$$14$$, $fill$$) {
    var $self$$19$$ = this, $limit$$1$$ = $start$$19$$ + $count$$15$$;
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] && this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] > $count$$15$$ && ($limit$$1$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] + $start$$19$$);
    var $newStart_opts$$8$$ = null;
    this.$IsVirtual$() ? ($newStart_opts$$8$$ = this.$_getFirstMissingModel$($start$$19$$, $limit$$1$$), $newStart_opts$$8$$ > $start$$19$$ && ($start$$19$$ = $newStart_opts$$8$$, $limit$$1$$ = $start$$19$$ + $count$$15$$, this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] && this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] > $count$$15$$ && ($limit$$1$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] + $start$$19$$)), $newStart_opts$$8$$ = {context:this, startIndex:$start$$19$$, fetchSize:$limit$$1$$ - 
    $start$$19$$}) : $newStart_opts$$8$$ = {context:this};
    $newStart_opts$$8$$.error = function $$newStart_opts$$8$$$error$($xhr$$13$$, $status$$9$$, $error$$8$$) {
      $reject$$14$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$13$$, $status$$9$$, $error$$8$$, $self$$19$$, null));
    };
    $newStart_opts$$8$$.success = function $$newStart_opts$$8$$$success$() {
      var $actual$$inline_376$$ = $self$$19$$.$_getLocalRange$($original$$2$$.start, $original$$2$$.count);
      if ($fill$$ && $self$$19$$.$_hasTotalResults$() && $actual$$inline_376$$.count < $original$$2$$.count) {
        var $newPlacement$$inline_377$$ = $actual$$inline_376$$.start + $actual$$inline_376$$.count, $newStart$$inline_378$$ = $start$$19$$ + $count$$15$$;
        $newStart$$inline_378$$ < $self$$19$$.totalResults ? $self$$19$$.$_setRangeLocalFetch$($newStart$$inline_378$$, $count$$15$$, $newPlacement$$inline_377$$, $original$$2$$, $resolve$$14$$, $reject$$14$$, $fill$$) : $resolve$$14$$($actual$$inline_376$$);
      } else {
        $resolve$$14$$($actual$$inline_376$$);
      }
    };
    try {
      this.$_fetchInternal$($newStart_opts$$8$$, $actual$$3_placement$$, -1 < $actual$$3_placement$$);
    } catch ($e$$20$$) {
      $e$$20$$ instanceof $oj$$1$$.$URLError$ && ($actual$$3_placement$$ = $self$$19$$.$_getLocalRange$($start$$19$$, $count$$15$$), $resolve$$14$$($actual$$3_placement$$));
    }
  };
  $oj$$1$$.$Collection$.$_createRejectionError$ = function $$oj$$1$$$$Collection$$$_createRejectionError$$($xhr$$14$$, $status$$10$$, $error$$9$$, $collection$$19$$, $err$$5_options$$72$$) {
    var $silent$$20$$ = !1;
    $err$$5_options$$72$$ && $err$$5_options$$72$$.silent && ($silent$$20$$ = $err$$5_options$$72$$.silent);
    $oj$$1$$.$Model$.$_triggerError$($collection$$19$$, $silent$$20$$, $err$$5_options$$72$$, $status$$10$$, $error$$9$$, $xhr$$14$$);
    $err$$5_options$$72$$ = Error($status$$10$$);
    $err$$5_options$$72$$.xhr = $xhr$$14$$;
    $err$$5_options$$72$$.error = $error$$9$$;
    $err$$5_options$$72$$.collection = $collection$$19$$;
    $err$$5_options$$72$$.status = $status$$10$$;
    return $err$$5_options$$72$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getMaxLength$ = function $$oj$$1$$$$Collection$$$$_getMaxLength$$($start$$20$$, $count$$16$$) {
    var $len$$3$$ = this.$_getModelsLength$();
    return 0 === $len$$3$$ ? $start$$20$$ + $count$$16$$ : $start$$20$$ + $count$$16$$ > $len$$3$$ ? $len$$3$$ : $start$$20$$ + $count$$16$$;
  };
  $oj$$1$$.$Collection$.prototype.$isRangeLocal$ = function $$oj$$1$$$$Collection$$$$isRangeLocal$$($start$$21$$, $count$$17$$) {
    var $localRange$$ = this.$_getLocalRange$($start$$21$$, $count$$17$$);
    return 0 === this.$_getModelsLength$() ? 0 === $count$$17$$ : $start$$21$$ === $localRange$$.start && ($count$$17$$ === $localRange$$.count || $start$$21$$ + $count$$17$$ > this.$_getModelsLength$());
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isRangeLocal", {$isRangeLocal$:$oj$$1$$.$Collection$.prototype.$isRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_getModelArray$ = function $$oj$$1$$$$Collection$$$$_getModelArray$$($start$$22$$, $count$$18$$) {
    for (var $retArr$$ = [], $models$$8$$ = this.$_getModels$(), $end$$6$$ = $start$$22$$ + $count$$18$$, $i$$55$$ = $start$$22$$;$i$$55$$ < $end$$6$$;$i$$55$$++) {
      $retArr$$.push($models$$8$$[$i$$55$$]);
    }
    return $retArr$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getLocalRange$ = function $$oj$$1$$$$Collection$$$$_getLocalRange$$($start$$23$$, $count$$19$$) {
    if (!this.$IsVirtual$()) {
      if (0 < this.$_getModelsLength$()) {
        if ($start$$23$$ + $count$$19$$ > this.$_getModelsLength$()) {
          var $c$$25_limit$$2$$ = this.$_getModelsLength$() - $start$$23$$;
          return{start:$start$$23$$, count:$c$$25_limit$$2$$, models:this.$_getModelArray$($start$$23$$, $c$$25_limit$$2$$)};
        }
        return{start:$start$$23$$, count:$count$$19$$, models:this.$_getModelArray$($start$$23$$, $count$$19$$)};
      }
      return{start:$start$$23$$, count:0, models:[]};
    }
    $c$$25_limit$$2$$ = this.$_getMaxLength$($start$$23$$, $count$$19$$);
    if (!this.$_hasTotalResults$() && $c$$25_limit$$2$$ < $start$$23$$ + $count$$19$$) {
      return{start:$start$$23$$, count:$c$$25_limit$$2$$ - $start$$23$$, models:this.$_getModelArray$($start$$23$$, $c$$25_limit$$2$$ - $start$$23$$)};
    }
    if (0 === $c$$25_limit$$2$$) {
      return{start:$start$$23$$, count:0, models:[]};
    }
    var $firstMissingModel$$ = this.$_getFirstMissingModel$($start$$23$$, $c$$25_limit$$2$$);
    if (-1 < $firstMissingModel$$) {
      return{start:$start$$23$$, count:$firstMissingModel$$ - $start$$23$$, models:this.$_getModelArray$($start$$23$$, $firstMissingModel$$ - $start$$23$$)};
    }
    $start$$23$$ > $c$$25_limit$$2$$ ? $count$$19$$ = 0 : $start$$23$$ + $count$$19$$ > $c$$25_limit$$2$$ && ($count$$19$$ = $c$$25_limit$$2$$ - $start$$23$$);
    return{start:$start$$23$$, count:$count$$19$$, models:this.$_getModelArray$($start$$23$$, $count$$19$$)};
  };
  $oj$$1$$.$Collection$.prototype.$_getFirstMissingModel$ = function $$oj$$1$$$$Collection$$$$_getFirstMissingModel$$($start$$24$$, $limit$$3$$) {
    for (var $i$$56$$ = $start$$24$$;$i$$56$$ < $limit$$3$$;$i$$56$$++) {
      if (void 0 === this.$_getModel$($i$$56$$)) {
        return $i$$56$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Collection$.prototype.fetch = function $$oj$$1$$$$Collection$$$fetch$($options$$73$$) {
    return this.$_fetchInternal$($options$$73$$, -1, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetch", {fetch:$oj$$1$$.$Collection$.prototype.fetch});
  $oj$$1$$.$Collection$.prototype.$_fetchInternal$ = function $$oj$$1$$$$Collection$$$$_fetchInternal$$($options$$74$$, $placement$$1$$, $fillIn$$2$$) {
    function $doReset$$($collection$$20$$, $opt$$9$$, $fillIn$$3$$) {
      $collection$$20$$.$IsVirtual$() ? $fillIn$$3$$ || $collection$$20$$.$_resetModelsToFullLength$() : $opt$$9$$.add || $opt$$9$$.$useset$ || $collection$$20$$.reset(null, {silent:!0});
    }
    var $opt$$8$$ = $options$$74$$ || {}, $success$$11$$ = $opt$$8$$.success, $self$$20$$, $errFunc$$ = $opt$$8$$.error;
    $opt$$8$$.set && ($opt$$8$$.$useset$ = $opt$$8$$.set ? !0 : !1);
    void 0 === $opt$$8$$.parse && ($opt$$8$$.parse = !0);
    $self$$20$$ = this;
    $opt$$8$$.error = function $$opt$$8$$$error$($xhr$$15$$, $status$$11$$, $error$$10$$) {
      $oj$$1$$.$Model$.$_triggerError$($self$$20$$, !1, $options$$74$$, $status$$11$$, $error$$10$$, $xhr$$15$$);
      $errFunc$$ && $errFunc$$.call($oj$$1$$.$Model$.$GetContext$($options$$74$$, $self$$20$$), $xhr$$15$$, $status$$11$$, $error$$10$$);
    };
    $opt$$8$$.success = function $$opt$$8$$$success$($response$$6$$) {
      var $data$$35$$;
      try {
        $data$$35$$ = $self$$20$$.parse($response$$6$$, $options$$74$$);
      } catch ($e$$21$$) {
        $oj$$1$$.$Collection$.$_reportError$($self$$20$$, $e$$21$$, $opt$$8$$.error, $options$$74$$);
        return;
      }
      $self$$20$$.$_setPagingReturnValues$($response$$6$$, $options$$74$$, $data$$35$$, $fillIn$$2$$);
      var $dataList$$ = null;
      if ($opt$$8$$.add || $self$$20$$.model) {
        $doReset$$($self$$20$$, $opt$$8$$, $fillIn$$2$$);
        try {
          $manageLRU$$ = !1, -1 === $placement$$1$$ && ($manageLRU$$ = !0, $placement$$1$$ = $self$$20$$.$_getOffset$()), $dataList$$ = $self$$20$$.$_fillInCollectionWithParsedData$($data$$35$$, $placement$$1$$, $manageLRU$$, $opt$$8$$);
        } catch ($e$$22$$) {
          $oj$$1$$.$Collection$.$_reportError$($self$$20$$, $e$$22$$, $opt$$8$$.error, $options$$74$$);
          return;
        }
      } else {
        if (!$fillIn$$2$$) {
          if ($self$$20$$.$IsVirtual$()) {
            $doReset$$($self$$20$$, $opt$$8$$, $fillIn$$2$$);
            var $manageLRU$$ = !1;
            -1 === $placement$$1$$ && ($manageLRU$$ = !0, $placement$$1$$ = $self$$20$$.$_getOffset$());
            $dataList$$ = $self$$20$$.$_putDataIntoCollection$($data$$35$$, $placement$$1$$, $manageLRU$$);
          } else {
            $opt$$8$$.$useset$ ? $self$$20$$.$_setInternal$($data$$35$$, !1, $opt$$8$$, !1) : $self$$20$$.reset($data$$35$$, {silent:!0});
          }
        }
      }
      $self$$20$$.$IsVirtual$() && $dataList$$ && ($self$$20$$.lastFetchCount = $dataList$$.length);
      $self$$20$$.$TriggerInternal$($opt$$8$$.silent ? !0 : !1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$20$$, $response$$6$$, $opt$$8$$);
      $success$$11$$ && $success$$11$$.call($oj$$1$$.$Model$.$GetContext$($options$$74$$, $self$$20$$), $self$$20$$, $response$$6$$, $opt$$8$$);
    };
    return this.$_fetchCall$($opt$$8$$);
  };
  $oj$$1$$.$Collection$.prototype.$_putDataIntoCollection$ = function $$oj$$1$$$$Collection$$$$_putDataIntoCollection$$($addOpt_data$$36$$, $insertPos_placement$$2$$, $manageLRU$$1_virtual$$) {
    var $dataList$$1$$;
    if ($addOpt_data$$36$$) {
      $dataList$$1$$ = $addOpt_data$$36$$ instanceof Array ? $addOpt_data$$36$$ : [$addOpt_data$$36$$];
      $addOpt_data$$36$$ = {};
      $manageLRU$$1_virtual$$ && this.$_manageLRU$($dataList$$1$$.length);
      $manageLRU$$1_virtual$$ = this.$IsVirtual$();
      for (var $prevItem$$ = null, $i$$57$$ = 0;$i$$57$$ < $dataList$$1$$.length;$i$$57$$ += 1) {
        $manageLRU$$1_virtual$$ && ($addOpt_data$$36$$ = {at:$insertPos_placement$$2$$}, $prevItem$$ = this.$_atInternal$($insertPos_placement$$2$$, null, !0, !1)), $addOpt_data$$36$$.silent = !0, this.$_addInternal$($dataList$$1$$[$i$$57$$], $addOpt_data$$36$$, !0, !1), this.$_atInternal$($insertPos_placement$$2$$, null, !0, !1) !== $prevItem$$ && $insertPos_placement$$2$$++;
      }
    }
    return $dataList$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_fillInCollectionWithParsedData$ = function $$oj$$1$$$$Collection$$$$_fillInCollectionWithParsedData$$($addOpt$$1_data$$37$$, $parsedModel_placement$$3$$, $manageLRU$$2_virtual$$1$$, $opt$$10_prevItem$$1$$) {
    $opt$$10_prevItem$$1$$ = $opt$$10_prevItem$$1$$ || {};
    var $parse$$2$$ = $opt$$10_prevItem$$1$$.parse, $modelInstance$$ = $oj$$1$$.$Collection$.$_createModel$(this);
    if ($addOpt$$1_data$$37$$) {
      var $dataList$$2$$ = $addOpt$$1_data$$37$$ instanceof Array ? $addOpt$$1_data$$37$$ : [$addOpt$$1_data$$37$$];
      $addOpt$$1_data$$37$$ = {};
      $manageLRU$$2_virtual$$1$$ && this.$_manageLRU$($dataList$$2$$.length);
      $manageLRU$$2_virtual$$1$$ = this.$IsVirtual$();
      if ($opt$$10_prevItem$$1$$.$useset$ && !$manageLRU$$2_virtual$$1$$) {
        for (var $i$$58$$ = 0;$i$$58$$ < $dataList$$2$$.length;$i$$58$$ += 1) {
          $parsedModel_placement$$3$$ = $modelInstance$$ && $parse$$2$$ ? $modelInstance$$.parse($dataList$$2$$[$i$$58$$]) : $dataList$$2$$[$i$$58$$], $dataList$$2$$[$i$$58$$] = $parsedModel_placement$$3$$;
        }
        this.$_setInternal$($dataList$$2$$, !1, $opt$$10_prevItem$$1$$, !1);
      } else {
        $opt$$10_prevItem$$1$$ = null;
        for (var $insertPos$$1$$ = $parsedModel_placement$$3$$, $i$$58$$ = 0;$i$$58$$ < $dataList$$2$$.length;$i$$58$$ += 1) {
          $parsedModel_placement$$3$$ = $modelInstance$$ && $parse$$2$$ ? $modelInstance$$.parse($dataList$$2$$[$i$$58$$]) : $dataList$$2$$[$i$$58$$], $manageLRU$$2_virtual$$1$$ && ($addOpt$$1_data$$37$$ = {at:$insertPos$$1$$}, $opt$$10_prevItem$$1$$ = this.$_atInternal$($insertPos$$1$$, $addOpt$$1_data$$37$$, !0, !1)), $addOpt$$1_data$$37$$.silent = !0, this.$_addInternal$($parsedModel_placement$$3$$, $addOpt$$1_data$$37$$, !0, !1), this.$_atInternal$($insertPos$$1$$, null, !0, !1) !== $opt$$10_prevItem$$1$$ && 
          $insertPos$$1$$++;
        }
      }
    }
    return $dataList$$2$$;
  };
  $oj$$1$$.$Collection$.$_reportError$ = function $$oj$$1$$$$Collection$$$_reportError$$($collection$$21$$, $e$$23$$, $errorFunc$$, $options$$75$$) {
    $oj$$1$$.$Logger$.error($e$$23$$.toString());
    $errorFunc$$ && $errorFunc$$.call($oj$$1$$.$Model$.$GetContext$($options$$75$$, $collection$$21$$), $collection$$21$$, $e$$23$$, $options$$75$$);
  };
  $oj$$1$$.$Collection$.prototype.$_fetchOnly$ = function $$oj$$1$$$$Collection$$$$_fetchOnly$$($options$$76$$) {
    var $opt$$11$$ = $options$$76$$ || {}, $success$$12$$ = $opt$$11$$.success, $parsedModel$$1$$, $self$$21$$;
    void 0 === $opt$$11$$.parse && ($opt$$11$$.parse = !0);
    $self$$21$$ = this;
    $opt$$11$$.success = function $$opt$$11$$$success$($response$$7$$) {
      var $data$$38_i$$59$$, $modelInstance$$1$$, $dataList$$3$$ = null, $fetchedModels$$ = [];
      try {
        $data$$38_i$$59$$ = $self$$21$$.parse($response$$7$$, $options$$76$$);
      } catch ($e$$24$$) {
        $oj$$1$$.$Collection$.$_reportError$($self$$21$$, $e$$24$$, $opt$$11$$.error, $options$$76$$);
        return;
      }
      if ($opt$$11$$.add || $self$$21$$.model) {
        if ($modelInstance$$1$$ = $oj$$1$$.$Collection$.$_createModel$($self$$21$$), $data$$38_i$$59$$) {
          for ($dataList$$3$$ = $data$$38_i$$59$$ instanceof Array ? $data$$38_i$$59$$ : [$data$$38_i$$59$$], $data$$38_i$$59$$ = 0;$data$$38_i$$59$$ < $dataList$$3$$.length;$data$$38_i$$59$$ += 1) {
            if ($modelInstance$$1$$ && $opt$$11$$.parse) {
              try {
                $parsedModel$$1$$ = $modelInstance$$1$$.parse($dataList$$3$$[$data$$38_i$$59$$]);
              } catch ($e$$25$$) {
                $oj$$1$$.$Collection$.$_reportError$($self$$21$$, $e$$25$$, $opt$$11$$.error, $options$$76$$);
                return;
              }
            } else {
              $parsedModel$$1$$ = $dataList$$3$$[$data$$38_i$$59$$];
            }
            $fetchedModels$$.push($self$$21$$.$_newModel$($parsedModel$$1$$));
          }
        }
      }
      $self$$21$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$21$$, $response$$7$$, $opt$$11$$);
      $success$$12$$ && $success$$12$$.call($oj$$1$$.$Model$.$GetContext$($options$$76$$, $self$$21$$), $self$$21$$, $fetchedModels$$, $opt$$11$$);
    };
    this.$_fetchCall$($opt$$11$$);
  };
  $oj$$1$$.$Collection$.prototype.$_fetchCall$ = function $$oj$$1$$$$Collection$$$$_fetchCall$$($opt$$12$$) {
    try {
      return $oj$$1$$.$Model$.$_internalSync$("read", this, $opt$$12$$);
    } catch ($e$$26$$) {
      throw $oj$$1$$.$Model$.$_triggerError$(this, !1, $opt$$12$$, null, $e$$26$$, null), $e$$26$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_resetModelsToFullLength$ = function $$oj$$1$$$$Collection$$$$_resetModelsToFullLength$$() {
    var $totalResults$$1$$ = this.totalResults;
    void 0 !== $totalResults$$1$$ && this.$_getModelsLength$() !== $totalResults$$1$$ && (this.$_setModels$(Array($totalResults$$1$$), !0), this.$_resetLRU$(), this.$_setLength$());
  };
  $oj$$1$$.$Collection$.prototype.$_getFetchSize$ = function $$oj$$1$$$$Collection$$$$_getFetchSize$$($options$$77$$) {
    $options$$77$$ = $options$$77$$ || {};
    return $options$$77$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] || this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$];
  };
  $oj$$1$$.$Collection$.prototype.$IsVirtual$ = function $$oj$$1$$$$Collection$$$$IsVirtual$$() {
    return-1 < this.$_getFetchSize$(null);
  };
  $oj$$1$$.$Collection$.prototype.$_getReturnProperty$ = function $$oj$$1$$$$Collection$$$$_getReturnProperty$$($customObj_value$$64$$, $response$$8$$, $property$$11$$, $optionValue$$, $defaultValue$$1$$) {
    $customObj_value$$64$$ = parseInt($oj$$1$$.$Collection$.$_getProp$($customObj_value$$64$$, $response$$8$$, $property$$11$$), 10);
    return void 0 === $customObj_value$$64$$ || null === $customObj_value$$64$$ || isNaN($customObj_value$$64$$) ? $optionValue$$ ? $optionValue$$ : $defaultValue$$1$$ : $customObj_value$$64$$;
  };
  $oj$$1$$.$Collection$.prototype.$_setPagingReturnValues$ = function $$oj$$1$$$$Collection$$$$_setPagingReturnValues$$($response$$9$$, $options$$78$$, $data$$39$$, $fillIn$$4$$) {
    var $customObj$$1$$ = {};
    this.customPagingOptions && (($customObj$$1$$ = this.customPagingOptions.call(this, $response$$9$$)) || ($customObj$$1$$ = {}));
    $options$$78$$ = $options$$78$$ || {};
    this.lastFetchSize = this.$_getReturnProperty$($customObj$$1$$, $response$$9$$, "limit", $options$$78$$.fetchSize, this.fetchSize);
    this.offset = this.$_getReturnProperty$($customObj$$1$$, $response$$9$$, "offset", $options$$78$$.startIndex, 0);
    this.lastFetchCount = this.$_getReturnProperty$($customObj$$1$$, $response$$9$$, "count", this.lastFetchCount, this.lastFetchCount);
    this.totalResults = this.$_getReturnProperty$($customObj$$1$$, $response$$9$$, "totalResults", this.totalResults, this.totalResults);
    this.hasMore = this.$_getHasMore$($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$9$$, "hasMore"), this.offset, this.lastFetchSize, this.totalResults);
    $fillIn$$4$$ || (this.totalResults = this.$_adjustTotalResults$(parseInt($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$9$$, "totalResults"), 10), this.hasMore, this.offset, parseInt($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$9$$, "count"), 10), $data$$39$$ && Array.isArray($data$$39$$) ? $data$$39$$.length : 0));
    !this.$IsVirtual$() && this.totalResults && this.totalResults !== this.lastFetchCount && this.lastFetchSize && this.$setFetchSize$(this.lastFetchSize);
  };
  $oj$$1$$.$Collection$.prototype.$_adjustTotalResults$ = function $$oj$$1$$$$Collection$$$$_adjustTotalResults$$($totalResultsReturned$$1$$, $hasMore$$, $offset$$14$$, $lastFetchCount$$, $dataLength$$) {
    return!$hasMore$$ && isNaN($totalResultsReturned$$1$$) ? (isNaN($lastFetchCount$$) ? $dataLength$$ : $lastFetchCount$$) + $offset$$14$$ : this.totalResults;
  };
  $oj$$1$$.$Collection$.prototype.$_getHasMore$ = function $$oj$$1$$$$Collection$$$$_getHasMore$$($hasMore$$1$$, $offset$$15$$, $lastFetchSize$$, $totalResults$$2$$) {
    return $oj$$1$$.$Collection$.$_defined$($hasMore$$1$$) ? $hasMore$$1$$ : void 0 === $totalResults$$2$$ || null === $totalResults$$2$$ ? !0 : $offset$$15$$ + $lastFetchSize$$ > $totalResults$$2$$ ? !1 : !0;
  };
  $oj$$1$$.$Collection$.$_getProp$ = function $$oj$$1$$$$Collection$$$_getProp$$($custom$$, $response$$10$$, $prop$$45$$) {
    return $custom$$.hasOwnProperty($prop$$45$$) ? $custom$$[$prop$$45$$] : $response$$10$$ ? $response$$10$$[$prop$$45$$] : void 0;
  };
  $oj$$1$$.$Collection$.prototype.$_getOffset$ = function $$oj$$1$$$$Collection$$$$_getOffset$$() {
    return $oj$$1$$.$Collection$.$_defined$(this.offset) ? this.offset : 0;
  };
  $oj$$1$$.$Collection$.prototype.create = function $$oj$$1$$$$Collection$$$create$($attributes$$7$$, $options$$79$$) {
    function $doSave$$($newModel$$6$$, $opt$$13$$) {
      $newModel$$6$$.save($attributes$$7$$ instanceof $oj$$1$$.$Model$ ? null : $attributes$$7$$, $opt$$13$$);
      return $newModel$$6$$;
    }
    function $doAdd$$1$$($newModel$$7$$, $addOpts$$1$$) {
      if ($options$$79$$.wait) {
        if ($self$$22$$.$IsVirtual$() || $deferred$$13$$) {
          return $self$$22$$.$_addPromise$(function() {
            return Promise.resolve(void 0);
          });
        }
      } else {
        return $self$$22$$.add($newModel$$7$$, $addOpts$$1$$);
      }
    }
    var $self$$22$$ = this;
    $options$$79$$ = $options$$79$$ || {};
    var $deferred$$13$$ = this.$_getDeferred$($options$$79$$), $newModel$$5$$ = this.$_newModel$($attributes$$7$$, $options$$79$$, !1), $callback$$75$$ = $options$$79$$.success, $context$$16$$ = $options$$79$$.context;
    $options$$79$$.context = this;
    $options$$79$$.success = function $$options$$79$$$success$($model$$35$$, $resp$$6$$, $successOpts$$) {
      $successOpts$$.xhr && ($options$$79$$.xhr = $successOpts$$.xhr);
      $options$$79$$.wait && $self$$22$$.add($newModel$$5$$, $options$$79$$);
      $callback$$75$$ && $callback$$75$$.call(null != $context$$16$$ ? $context$$16$$ : $self$$22$$, $model$$35$$, $resp$$6$$, $options$$79$$);
    };
    if (null == $newModel$$5$$) {
      return!1;
    }
    $options$$79$$.forceNew = null != $newModel$$5$$.$GetId$();
    var $addOpts$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$79$$);
    $newModel$$5$$.$SetCollection$(this);
    if ($deferred$$13$$ || this.$IsVirtual$()) {
      return new Promise(function($resolve$$15$$) {
        $addOpts$$.merge = !0;
        $addOpts$$.deferred = !0;
        $doAdd$$1$$($newModel$$5$$, $addOpts$$).then(function() {
          $options$$79$$.success = function $$options$$79$$$success$($model$$37$$, $resp$$7$$, $successOpts$$1$$) {
            $successOpts$$1$$.xhr && ($options$$79$$.xhr = $successOpts$$1$$.xhr);
            $options$$79$$.wait ? ($self$$22$$.$IsVirtual$() && ($addOpts$$.force = !0), $self$$22$$.add($newModel$$5$$, $addOpts$$).then(function() {
              $callback$$75$$ && $callback$$75$$.call(null != $context$$16$$ ? $context$$16$$ : $self$$22$$, $model$$37$$, $resp$$7$$, $options$$79$$);
              $resolve$$15$$($model$$37$$);
            })) : ($callback$$75$$ && $callback$$75$$.call(null != $context$$16$$ ? $context$$16$$ : $self$$22$$, $model$$37$$, $resp$$7$$, $options$$79$$), $resolve$$15$$($model$$37$$));
          };
          var $model$$36$$ = $doSave$$($newModel$$5$$, $options$$79$$);
          $model$$36$$ || $resolve$$15$$($model$$36$$);
        });
      });
    }
    $addOpts$$.merge = !0;
    $doAdd$$1$$($newModel$$5$$, $addOpts$$);
    return $doSave$$($newModel$$5$$, $options$$79$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.create", {create:$oj$$1$$.$Collection$.prototype.create});
  $oj$$1$$.$Collection$.prototype.$pluck$ = function $$oj$$1$$$$Collection$$$$pluck$$($attr$$9$$) {
    var $arr$$16$$ = [], $i$$60$$;
    this.$_throwErrIfVirtual$("pluck");
    for ($i$$60$$ = 0;$i$$60$$ < this.$_getLength$();$i$$60$$ += 1) {
      $arr$$16$$.push(this.at($i$$60$$).get($attr$$9$$));
    }
    return $arr$$16$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pluck", {$pluck$:$oj$$1$$.$Collection$.prototype.$pluck$});
  $oj$$1$$.$Collection$.prototype.$where$ = function $$oj$$1$$$$Collection$$$$where$$($attrs$$13$$, $options$$80$$) {
    return this.$_handlePromise$(this.$_whereInternal$($attrs$$13$$, $options$$80$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.where", {$where$:$oj$$1$$.$Collection$.prototype.$where$});
  $oj$$1$$.$Collection$.prototype.$_whereInternal$ = function $$oj$$1$$$$Collection$$$$_whereInternal$$($attrs$$14$$, $options$$81$$) {
    $options$$81$$ = $options$$81$$ || {};
    var $deferred$$14$$ = this.$_getDeferred$($options$$81$$), $self$$23$$ = this;
    if (this.$IsVirtual$()) {
      return new Promise(function($resolve$$16$$, $reject$$16$$) {
        $self$$23$$.$_fetchOnly$({query:$attrs$$14$$, all:!0, success:function($collection$$23$$, $fetchedModels$$1$$) {
          $resolve$$16$$($fetchedModels$$1$$);
        }, error:function($xhr$$18$$, $status$$14$$, $error$$11$$) {
          $reject$$16$$($oj$$1$$.$Collection$.$_createRejectionError$($xhr$$18$$, $status$$14$$, $error$$11$$, $self$$23$$, $options$$81$$));
        }});
      });
    }
    var $arr$$17$$ = [], $i$$61$$, $m$$7$$;
    for ($i$$61$$ = 0;$i$$61$$ < this.$_getLength$();$i$$61$$ += 1) {
      $m$$7$$ = this.at($i$$61$$), $m$$7$$.$Contains$($attrs$$14$$) && $arr$$17$$.push($m$$7$$);
    }
    return $deferred$$14$$ ? new Promise(function($resolve$$17$$) {
      $resolve$$17$$($arr$$17$$);
    }) : $arr$$17$$;
  };
  $oj$$1$$.$Collection$.prototype.$whereToCollection$ = function $$oj$$1$$$$Collection$$$$whereToCollection$$($attrs$$15$$, $options$$83$$) {
    $options$$83$$ = $options$$83$$ || {};
    var $deferred$$15_models$$9_newCollection$$ = this.$_getDeferred$($options$$83$$), $self$$24$$ = this;
    if (this.$IsVirtual$() || $deferred$$15_models$$9_newCollection$$) {
      return this.$_addPromise$(function() {
        return new Promise(function($resolve$$18$$, $reject$$18$$) {
          return $self$$24$$.$_whereInternal$($attrs$$15$$, $options$$83$$).then(function($collection$$24_models$$10$$) {
            $collection$$24_models$$10$$ = $self$$24$$.$_makeNewCollection$($collection$$24_models$$10$$);
            $resolve$$18$$($collection$$24_models$$10$$);
          }, function($err$$6$$) {
            $reject$$18$$($err$$6$$);
          });
        });
      });
    }
    $deferred$$15_models$$9_newCollection$$ = this.$_whereInternal$($attrs$$15$$, $options$$83$$);
    $deferred$$15_models$$9_newCollection$$ = this.$_makeNewCollection$($deferred$$15_models$$9_newCollection$$);
    $deferred$$15_models$$9_newCollection$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = -1;
    $deferred$$15_models$$9_newCollection$$.$_setLength$();
    return $deferred$$15_models$$9_newCollection$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.whereToCollection", {$whereToCollection$:$oj$$1$$.$Collection$.prototype.$whereToCollection$});
  $oj$$1$$.$Collection$.prototype.$_makeNewCollection$ = function $$oj$$1$$$$Collection$$$$_makeNewCollection$$($models$$11$$) {
    var $collection$$25$$ = this.$_cloneInternal$(!1);
    $collection$$25$$.$_setModels$($models$$11$$, !1);
    $collection$$25$$.$_resetLRU$();
    $collection$$25$$.$_setLength$();
    return $collection$$25$$;
  };
  $oj$$1$$.$Collection$.prototype.$_throwErrIfVirtual$ = function $$oj$$1$$$$Collection$$$$_throwErrIfVirtual$$($func$$4$$) {
    if (this.$IsVirtual$()) {
      throw Error($func$$4$$ + " not valid on a virtual Collection");
    }
  };
  $oj$$1$$.$Collection$.prototype.map = function $$oj$$1$$$$Collection$$$map$($iterator$$, $context$$17$$) {
    var $retArr$$1$$ = [], $value$$65$$;
    this.$_throwErrIfVirtual$("map");
    this.$_getModels$().forEach(function($model$$38$$) {
      $value$$65$$ = $iterator$$.call($context$$17$$ || this, $model$$38$$);
      $retArr$$1$$.push($value$$65$$);
    });
    return $retArr$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.map", {map:$oj$$1$$.$Collection$.prototype.map});
  $oj$$1$$.$Collection$.prototype.each = function $$oj$$1$$$$Collection$$$each$($iterator$$1$$, $context$$18$$) {
    this.$_throwErrIfVirtual$("each");
    this.$_getModels$().forEach($iterator$$1$$, $context$$18$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.each", {each:$oj$$1$$.$Collection$.prototype.each});
  $oj$$1$$.$Collection$.prototype.size = function $$oj$$1$$$$Collection$$$size$() {
    return this.$_getLength$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.size", {size:$oj$$1$$.$Collection$.prototype.size});
  $oj$$1$$.$Collection$.prototype.$sortBy$ = function $$oj$$1$$$$Collection$$$$sortBy$$($iterator$$2$$, $context$$19$$) {
    var $retArr$$2$$ = [], $self$$25$$;
    this.$_throwErrIfVirtual$("sortBy");
    this.$_getModels$().forEach(function($model$$39$$) {
      $retArr$$2$$.push($model$$39$$);
    });
    $self$$25$$ = this;
    $retArr$$2$$.sort(function($a$$86$$, $b$$48$$) {
      var $keyA$$3$$, $keyB$$3$$;
      if ($$$$1$$.isFunction($iterator$$2$$)) {
        return $keyA$$3$$ = $iterator$$2$$.call($context$$19$$ || $self$$25$$, $a$$86$$), $keyB$$3$$ = $iterator$$2$$.call($context$$19$$ || $self$$25$$, $b$$48$$), $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$25$$.sortDirection);
      }
      $keyA$$3$$ = $a$$86$$.get($iterator$$2$$);
      $keyB$$3$$ = $b$$48$$.get($iterator$$2$$);
      return $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$25$$.sortDirection);
    });
    return $retArr$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortBy", {$sortBy$:$oj$$1$$.$Collection$.prototype.$sortBy$});
  $oj$$1$$.$Collection$.prototype.$groupBy$ = function $$oj$$1$$$$Collection$$$$groupBy$$($iterator$$3$$, $context$$20$$) {
    var $retObj$$7$$ = {}, $groupVal$$;
    this.$_throwErrIfVirtual$("groupBy");
    this.$_getModels$().forEach(function($model$$40$$) {
      $groupVal$$ = $$$$1$$.isFunction($iterator$$3$$) ? $iterator$$3$$.call($context$$20$$ || this, $model$$40$$) : $model$$40$$.get($iterator$$3$$);
      void 0 === $retObj$$7$$[$groupVal$$] && ($retObj$$7$$[$groupVal$$] = []);
      $retObj$$7$$[$groupVal$$].push($model$$40$$);
    }, this);
    return $retObj$$7$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.groupBy", {$groupBy$:$oj$$1$$.$Collection$.prototype.$groupBy$});
  $oj$$1$$.$Collection$.prototype.$indexBy$ = function $$oj$$1$$$$Collection$$$$indexBy$$($iterator$$4$$, $context$$21$$) {
    var $retObj$$8$$ = {}, $index$$70$$;
    this.$_throwErrIfVirtual$("indexBy");
    this.$_getModels$().forEach(function($model$$41$$) {
      $index$$70$$ = $$$$1$$.isFunction($iterator$$4$$) ? $iterator$$4$$.call($context$$21$$ || this, $model$$41$$) : $model$$41$$.get($iterator$$4$$);
      $retObj$$8$$[$index$$70$$] = $model$$41$$;
    }, this);
    return $retObj$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.indexBy", {$indexBy$:$oj$$1$$.$Collection$.prototype.$indexBy$});
  $oj$$1$$.$Collection$.prototype.min = function $$oj$$1$$$$Collection$$$min$($iterator$$5$$, $context$$22$$) {
    var $minModel$$ = {}, $minModelValue$$, $currValue$$;
    this.$_throwErrIfVirtual$("min");
    if (0 == this.$_getModelsLength$()) {
      return null;
    }
    $minModel$$ = this.$_getModel$(0);
    $minModelValue$$ = $iterator$$5$$.call($context$$22$$ || this, this.$_getModel$(0));
    this.$_getModels$().forEach(function($model$$42$$, $i$$62$$) {
      1 <= $i$$62$$ && ($currValue$$ = $iterator$$5$$.call($context$$22$$ || this, $model$$42$$), $currValue$$ < $minModelValue$$ && ($minModel$$ = $model$$42$$, $minModelValue$$ = $currValue$$));
    }, this);
    return $minModel$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.min", {min:$oj$$1$$.$Collection$.prototype.min});
  $oj$$1$$.$Collection$.prototype.max = function $$oj$$1$$$$Collection$$$max$($iterator$$6$$, $context$$23$$) {
    var $maxModel$$ = {}, $maxModelValue$$, $currValue$$1$$;
    this.$_throwErrIfVirtual$("max");
    if (0 == this.$_getModelsLength$()) {
      return null;
    }
    $maxModel$$ = this.$_getModel$(0);
    $maxModelValue$$ = $iterator$$6$$.call($context$$23$$, this.$_getModel$(0));
    this.$_getModels$().forEach(function($model$$43$$, $i$$63$$) {
      1 <= $i$$63$$ && ($currValue$$1$$ = $iterator$$6$$.call($context$$23$$ || this, $model$$43$$), $currValue$$1$$ > $maxModelValue$$ && ($maxModel$$ = $model$$43$$, $maxModelValue$$ = $currValue$$1$$));
    }, this);
    return $maxModel$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.max", {max:$oj$$1$$.$Collection$.prototype.max});
  $oj$$1$$.$Collection$.prototype.filter = function $$oj$$1$$$$Collection$$$filter$($iterator$$7$$, $context$$24$$) {
    var $retArr$$3$$ = [];
    this.$_throwErrIfVirtual$("filter");
    this.$_getModels$().forEach(function($model$$44$$) {
      $iterator$$7$$.call($context$$24$$ || this, $model$$44$$) && $retArr$$3$$.push($model$$44$$);
    });
    return $retArr$$3$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.filter", {filter:$oj$$1$$.$Collection$.prototype.filter});
  $oj$$1$$.$Collection$.prototype.$without$ = function $$oj$$1$$$$Collection$$$$without$$($var_args$$46$$) {
    var $retArr$$4$$ = [], $j$$2$$, $id$$10$$, $cid$$5$$, $add$$;
    this.$_throwErrIfVirtual$("without");
    for (var $model$$45$$, $i$$64$$ = 0;$i$$64$$ < this.$_getModels$().length;$i$$64$$++) {
      $add$$ = !0;
      $model$$45$$ = this.$_getModel$($i$$64$$);
      for ($j$$2$$ = 0;$j$$2$$ < arguments.length;$j$$2$$ += 1) {
        if ($cid$$5$$ = arguments[$j$$2$$].$GetCid$(), $id$$10$$ = arguments[$j$$2$$].$GetId$(), $model$$45$$.$Match$($id$$10$$, $cid$$5$$)) {
          $add$$ = !1;
          break;
        }
      }
      $add$$ && $retArr$$4$$.push($model$$45$$);
    }
    return $retArr$$4$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.without", {$without$:$oj$$1$$.$Collection$.prototype.$without$});
  $oj$$1$$.$Collection$.prototype.$difference$ = function $$oj$$1$$$$Collection$$$$difference$$($var_args$$47$$) {
    var $retArr$$5$$ = [], $j$$3$$, $k$$3$$, $id$$11$$, $cid$$6$$, $add$$1$$;
    this.$_throwErrIfVirtual$("difference");
    for (var $model$$46$$, $i$$65$$ = 0;$i$$65$$ < this.$_getModels$().length;$i$$65$$++) {
      $add$$1$$ = !0;
      $model$$46$$ = this.$_getModel$($i$$65$$);
      for ($j$$3$$ = 0;$j$$3$$ < arguments.length;$j$$3$$ += 1) {
        for ($k$$3$$ = 0;$k$$3$$ < arguments[$j$$3$$].length;$k$$3$$++) {
          if ($cid$$6$$ = arguments[$j$$3$$][$k$$3$$].$GetCid$(), $id$$11$$ = arguments[$j$$3$$][$k$$3$$].$GetId$(), $model$$46$$.$Match$($id$$11$$, $cid$$6$$)) {
            $add$$1$$ = !1;
            break;
          }
        }
        if (!$add$$1$$) {
          break;
        }
      }
      $add$$1$$ && $retArr$$5$$.push($model$$46$$);
    }
    return $retArr$$5$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.difference", {$difference$:$oj$$1$$.$Collection$.prototype.$difference$});
  $oj$$1$$.$Collection$.prototype.$isEmpty$ = function $$oj$$1$$$$Collection$$$$isEmpty$$() {
    return 0 === this.$_getLength$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isEmpty", {$isEmpty$:$oj$$1$$.$Collection$.prototype.$isEmpty$});
  $oj$$1$$.$Collection$.prototype.$any$ = function $$oj$$1$$$$Collection$$$$any$$($iterator$$8$$, $context$$25$$) {
    this.$_throwErrIfVirtual$("any");
    for (var $model$$47$$, $i$$66$$ = 0;$i$$66$$ < this.$_getModelsLength$();$i$$66$$ += 1) {
      if ($model$$47$$ = this.$_getModel$($i$$66$$), $iterator$$8$$.call($context$$25$$ || this, $model$$47$$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.any", {$any$:$oj$$1$$.$Collection$.prototype.$any$});
  $oj$$1$$.$Collection$.prototype.$findWhere$ = function $$oj$$1$$$$Collection$$$$findWhere$$($attrs$$16$$, $options$$84$$) {
    var $arr$$18_deferred$$16$$ = this.$_getDeferred$($options$$84$$), $self$$26$$ = this;
    if (this.$IsVirtual$() || $arr$$18_deferred$$16$$) {
      return this.$_addPromise$(function() {
        return new Promise(function($resolve$$19$$) {
          $self$$26$$.$_whereInternal$($attrs$$16$$, $options$$84$$).then(function($modelList$$1$$) {
            $modelList$$1$$ && 0 < $modelList$$1$$.length && $resolve$$19$$($modelList$$1$$[0]);
            $resolve$$19$$(null);
          });
        });
      });
    }
    $arr$$18_deferred$$16$$ = this.$_whereInternal$($attrs$$16$$, $options$$84$$);
    return 0 < $arr$$18_deferred$$16$$.length ? $arr$$18_deferred$$16$$[0] : null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.findWhere", {$findWhere$:$oj$$1$$.$Collection$.prototype.$findWhere$});
  $oj$$1$$.$Collection$.prototype.slice = function $$oj$$1$$$$Collection$$$slice$($start$$25$$, $end$$7$$, $options$$85_ret$$1$$) {
    var $deferred$$17_i$$67$$ = this.$_getDeferred$($options$$85_ret$$1$$);
    $options$$85_ret$$1$$ = [];
    if (void 0 === $end$$7$$) {
      if (this.$IsVirtual$() && !this.$_hasTotalResults$()) {
        throw Error("End must be set for virtual collections with no totalResults");
      }
      $end$$7$$ = this.$_getModelsLength$();
    }
    if ($deferred$$17_i$$67$$ || this.$IsVirtual$()) {
      return this.$_addPromise$(function() {
        return this.$IterativeAt$($start$$25$$, $end$$7$$);
      });
    }
    for ($deferred$$17_i$$67$$ = $start$$25$$;$deferred$$17_i$$67$$ < $end$$7$$;$deferred$$17_i$$67$$ += 1) {
      $options$$85_ret$$1$$.push(this.$_getModel$($deferred$$17_i$$67$$));
    }
    return $options$$85_ret$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.slice", {slice:$oj$$1$$.$Collection$.prototype.slice});
  $oj$$1$$.$Collection$.prototype.set = function $$oj$$1$$$$Collection$$$set$($models$$12$$, $options$$86$$) {
    return this.$_setInternal$($models$$12$$, !0, $options$$86$$, this.$_getDeferred$($options$$86$$) || this.$IsVirtual$());
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.set", {set:$oj$$1$$.$Collection$.prototype.set});
  $oj$$1$$.$Collection$.$_removeAfterSet$ = function $$oj$$1$$$$Collection$$$_removeAfterSet$$($collection$$26$$, $models$$13$$, $i$$68_remove$$, $foundModels$$, $options$$87$$) {
    if ($i$$68_remove$$) {
      for ($i$$68_remove$$ = $models$$13$$.length - 1;0 <= $i$$68_remove$$;$i$$68_remove$$ -= 1) {
        -1 == $foundModels$$.indexOf($i$$68_remove$$) && $collection$$26$$.$_removeInternal$($models$$13$$[$i$$68_remove$$], $i$$68_remove$$, $options$$87$$);
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_swapModels$ = function $$oj$$1$$$$Collection$$$$_swapModels$$($oldIndex$$, $newIndex$$, $len$$4_oldModel$$1_remove$$1$$, $add$$2_newModel$$8$$) {
    if (this.$_hasComparator$() || !$len$$4_oldModel$$1_remove$$1$$ || !$add$$2_newModel$$8$$) {
      return{index:$oldIndex$$, $swapped$:!1};
    }
    $len$$4_oldModel$$1_remove$$1$$ = this.$_getModelsLength$();
    if ($oldIndex$$ >= $len$$4_oldModel$$1_remove$$1$$ || $newIndex$$ >= $len$$4_oldModel$$1_remove$$1$$) {
      return{index:$oldIndex$$, $swapped$:!1};
    }
    $len$$4_oldModel$$1_remove$$1$$ = this.$_getModel$($oldIndex$$);
    $add$$2_newModel$$8$$ = this.$_getModel$($newIndex$$);
    this.$_setModel$($oldIndex$$, $add$$2_newModel$$8$$);
    $add$$2_newModel$$8$$.$SetIndex$($oldIndex$$);
    this.$_setModel$($newIndex$$, $len$$4_oldModel$$1_remove$$1$$);
    $len$$4_oldModel$$1_remove$$1$$.$SetIndex$($newIndex$$);
    return{index:$newIndex$$, $swapped$:$newIndex$$ !== $oldIndex$$};
  };
  $oj$$1$$.$Collection$.prototype.$_setInternal$ = function $$oj$$1$$$$Collection$$$$_setInternal$$($i$$69_models$$14$$, $parse$$3_swapped$$, $options$$88$$, $deferred$$19$$) {
    $options$$88$$ = $options$$88$$ || {};
    var $add$$3$$ = void 0 === $options$$88$$.add ? !0 : $options$$88$$.add, $remove$$2$$ = void 0 === $options$$88$$.remove ? !0 : $options$$88$$.remove, $merge$$1$$ = void 0 === $options$$88$$.merge ? !0 : $options$$88$$.merge, $foundModels$$1$$ = [], $currModel_obj$$48$$ = null, $modelList$$2$$;
    $parse$$3_swapped$$ && ($i$$69_models$$14$$ = this.parse($i$$69_models$$14$$));
    $modelList$$2$$ = $$$$1$$.isArray($i$$69_models$$14$$) ? $i$$69_models$$14$$ : [$i$$69_models$$14$$];
    if ($deferred$$19$$) {
      return this.$_addPromise$(function() {
        return this.$_deferredSet$($modelList$$2$$, this.$_getModels$(), $options$$88$$, $remove$$2$$, $add$$3$$, $merge$$1$$);
      });
    }
    $parse$$3_swapped$$ = !1;
    for ($i$$69_models$$14$$ = 0;$i$$69_models$$14$$ < $modelList$$2$$.length;$i$$69_models$$14$$ += 1) {
      if ($currModel_obj$$48$$ = this.$_updateModel$(this.$_newModel$($modelList$$2$$[$i$$69_models$$14$$], $options$$88$$, !0), $add$$3$$, $merge$$1$$, $deferred$$19$$), -1 !== $currModel_obj$$48$$) {
        var $currModel_obj$$48$$ = this.$_swapModels$($currModel_obj$$48$$, $i$$69_models$$14$$, $remove$$2$$, $add$$3$$), $newLoc$$ = $currModel_obj$$48$$.index;
        $currModel_obj$$48$$.$swapped$ && ($parse$$3_swapped$$ = !0);
        -1 === $foundModels$$1$$.indexOf($newLoc$$) && $foundModels$$1$$.push($newLoc$$);
      }
    }
    $parse$$3_swapped$$ && this.$TriggerInternal$($options$$88$$.silent, $oj$$1$$.$Events$.$EventType$.SORT, this, $options$$88$$.add ? {add:!0} : null, null);
    $oj$$1$$.$Collection$.$_removeAfterSet$(this, this.$_getModels$(), $remove$$2$$, $foundModels$$1$$, $options$$88$$);
  };
  $oj$$1$$.$Collection$.prototype.$_deferredSet$ = function $$oj$$1$$$$Collection$$$$_deferredSet$$($modelList$$3$$, $modelsCopy$$, $options$$89$$, $remove$$3$$, $add$$4$$, $merge$$2$$) {
    var $foundModels$$2$$ = [], $i$$70$$, $self$$27$$ = this;
    return new Promise(function($allResolve$$2$$, $allReject$$2$$) {
      function $doTask$$2$$($index$$71$$) {
        return new Promise(function($resolve$$20$$, $reject$$20$$) {
          $self$$27$$.$_updateModel$($self$$27$$.$_newModel$($modelList$$3$$[$index$$71$$], $options$$89$$, !0), $add$$4$$, $merge$$2$$, !0).then(function($currModel$$1$$) {
            -1 !== $currModel$$1$$ && $foundModels$$2$$.push($currModel$$1$$);
            $resolve$$20$$($index$$71$$ + 1);
          }, $reject$$20$$);
        });
      }
      var $currentStep$$2$$ = Promise.resolve(0);
      for ($i$$70$$ = 0;$i$$70$$ < $modelList$$3$$.length;$i$$70$$ += 1) {
        $currentStep$$2$$ = $currentStep$$2$$.then($doTask$$2$$);
      }
      $currentStep$$2$$.then(function() {
        $oj$$1$$.$Collection$.$_removeAfterSet$($self$$27$$, $modelsCopy$$, $remove$$3$$, $foundModels$$2$$, $options$$89$$);
        $allResolve$$2$$(void 0);
      }, $allReject$$2$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_updateModel$ = function $$oj$$1$$$$Collection$$$$_updateModel$$($model$$48$$, $add$$5$$, $merge$$3$$, $deferred$$20$$) {
    function $update$$($collection$$27$$, $found$$2$$, $deferred$$21$$) {
      var $index$$72$$ = $found$$2$$ ? $found$$2$$.index : -1;
      if ($found$$2$$ && $found$$2$$.m) {
        if ($merge$$3$$) {
          var $opt$$15$$ = {merge:$merge$$3$$};
          if ($deferred$$21$$) {
            return new Promise(function($resolve$$21$$) {
              $collection$$27$$.$_addInternal$($model$$48$$, $opt$$15$$, !1, !0).then(function() {
                $resolve$$21$$($index$$72$$);
              });
            });
          }
          $collection$$27$$.add($model$$48$$, $opt$$15$$);
        }
      } else {
        if ($add$$5$$) {
          if ($deferred$$21$$) {
            return new Promise(function($resolve$$22$$) {
              $collection$$27$$.$_addInternal$($model$$48$$, $opt$$15$$, !1, !0).then(function() {
                $resolve$$22$$($collection$$27$$.$_getLength$() - 1);
              });
            });
          }
          $collection$$27$$.add($model$$48$$);
          $index$$72$$ = $collection$$27$$.$_getLength$() - 1;
        }
      }
      return $index$$72$$;
    }
    if ($deferred$$20$$ || this.$IsVirtual$()) {
      var $self$$28$$ = this;
      return new Promise(function($resolve$$23$$) {
        $self$$28$$.$_getInternal$($model$$48$$, {silent:!0}, $deferred$$20$$).then(function($found$$3$$) {
          $update$$($self$$28$$, $found$$3$$, !0).then(function($index$$73$$) {
            $resolve$$23$$($index$$73$$);
          });
        });
      });
    }
    var $found$$1$$ = this.$_getInternal$($model$$48$$);
    return $update$$(this, $found$$1$$, !1);
  };
  $oj$$1$$.$Collection$.prototype.toJSON = function $$oj$$1$$$$Collection$$$toJSON$() {
    var $retArr$$6$$ = [];
    this.$_throwErrIfVirtual$("toJSON");
    this.$_getModels$().forEach(function($model$$49$$) {
      $retArr$$6$$.push($model$$49$$.toJSON());
    });
    return $retArr$$6$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.toJSON", {toJSON:$oj$$1$$.$Collection$.prototype.toJSON});
  $oj$$1$$.$Collection$.prototype.first = function $$oj$$1$$$$Collection$$$first$($n$$12$$, $options$$90$$) {
    var $deferred$$22_i$$71_virtual$$2$$ = this.$_getDeferred$($options$$90$$), $elementCount$$ = this.$_getLength$(), $retArray$$2$$ = [];
    $n$$12$$ ? $elementCount$$ = $n$$12$$ : $n$$12$$ = 1;
    $deferred$$22_i$$71_virtual$$2$$ = this.$IsVirtual$() || $deferred$$22_i$$71_virtual$$2$$;
    if (1 === $n$$12$$) {
      return $deferred$$22_i$$71_virtual$$2$$ ? this.$_deferredAt$(0, null) : 0 < this.$_getModelsLength$() ? this.$_getModel$(0) : null;
    }
    $elementCount$$ > this.$_getModelsLength$() && (!this.$IsVirtual$() || this.$_hasTotalResults$()) && ($elementCount$$ = this.$_getModelsLength$());
    if ($deferred$$22_i$$71_virtual$$2$$) {
      return this.$_addPromise$(function() {
        return this.$IterativeAt$(0, $elementCount$$);
      });
    }
    for ($deferred$$22_i$$71_virtual$$2$$ = 0;$deferred$$22_i$$71_virtual$$2$$ < $elementCount$$;$deferred$$22_i$$71_virtual$$2$$ += 1) {
      $retArray$$2$$.push(this.$_getModel$($deferred$$22_i$$71_virtual$$2$$));
    }
    return $retArray$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.first", {first:$oj$$1$$.$Collection$.prototype.first});
  $oj$$1$$.$Collection$.prototype.indexOf = function $$oj$$1$$$$Collection$$$indexOf$($model$$50$$, $options$$91$$) {
    var $deferred$$23$$ = this.$_getDeferred$($options$$91$$);
    return this.$IsVirtual$() || $deferred$$23$$ ? this.$_getInternal$($model$$50$$, null, !0).then(function($loc$$1$$) {
      return $loc$$1$$.index;
    }) : this.$_getInternal$($model$$50$$).index;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.indexOf", {indexOf:$oj$$1$$.$Collection$.prototype.indexOf});
  $oj$$1$$.$Collection$.prototype.contains = function $$oj$$1$$$$Collection$$$contains$($model$$51$$, $options$$92$$) {
    var $deferred$$24$$ = this.$_getDeferred$($options$$92$$);
    return this.$IsVirtual$() || $deferred$$24$$ ? this.$_getInternal$($model$$51$$, null, !0).then(function($loc$$2$$) {
      return-1 < $loc$$2$$.index;
    }) : -1 < this.$_getInternal$($model$$51$$).index;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.contains", {contains:$oj$$1$$.$Collection$.prototype.contains});
  $oj$$1$$.$Collection$.prototype.$include$ = $oj$$1$$.$Collection$.prototype.contains;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.include", {$include$:$oj$$1$$.$Collection$.prototype.$include$});
  $oj$$1$$.$Collection$.prototype.$_localIndexOf$ = function $$oj$$1$$$$Collection$$$$_localIndexOf$$($location$$23_model$$52$$) {
    $location$$23_model$$52$$ = this.$_getLocalInternal$($location$$23_model$$52$$);
    return void 0 !== $location$$23_model$$52$$ ? $location$$23_model$$52$$.index : -1;
  };
  $oj$$1$$.$Collection$.prototype.pop = function $$oj$$1$$$$Collection$$$pop$($options$$93$$) {
    var $deferred$$25_m$$8$$ = this.$_getDeferred$($options$$93$$);
    if (this.$IsVirtual$() || $deferred$$25_m$$8$$) {
      var $self$$29$$ = this;
      return this.at(this.$_getLength$() - 1, {deferred:$deferred$$25_m$$8$$}).then(function($model$$53$$) {
        $self$$29$$.remove($model$$53$$, $options$$93$$);
        return $model$$53$$;
      });
    }
    $deferred$$25_m$$8$$ = this.at(this.$_getLength$() - 1);
    this.remove($deferred$$25_m$$8$$, $options$$93$$);
    return $deferred$$25_m$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pop", {pop:$oj$$1$$.$Collection$.prototype.pop});
  $oj$$1$$.$Collection$.prototype.push = function $$oj$$1$$$$Collection$$$push$($m$$9$$, $options$$94$$) {
    var $deferred$$26$$ = this.$_getDeferred$($options$$94$$);
    this.$_manageLRU$(1);
    return this.$_handlePromise$(this.$_addInternal$($m$$9$$, $options$$94$$, !1, $deferred$$26$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.push", {push:$oj$$1$$.$Collection$.prototype.push});
  $oj$$1$$.$Collection$.prototype.lastIndexOf = function $$oj$$1$$$$Collection$$$lastIndexOf$($model$$54$$, $fromIndex$$2$$) {
    var $i$$72$$;
    this.$_throwErrIfVirtual$("lastIndexOf");
    void 0 === $fromIndex$$2$$ && ($fromIndex$$2$$ = 0);
    for ($i$$72$$ = this.$_getLength$() - 1;$i$$72$$ >= $fromIndex$$2$$;$i$$72$$ -= 1) {
      if ($oj$$1$$.$Object$.$__innerEquals$($model$$54$$, this.at($i$$72$$))) {
        return $i$$72$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastIndexOf", {lastIndexOf:$oj$$1$$.$Collection$.prototype.lastIndexOf});
  $oj$$1$$.$Collection$.prototype.$_getSortAttrs$ = function $$oj$$1$$$$Collection$$$$_getSortAttrs$$($sortStr$$) {
    return void 0 === $sortStr$$ ? [] : $sortStr$$.split(",");
  };
  $oj$$1$$.$Collection$.$_getQueryString$ = function $$oj$$1$$$$Collection$$$_getQueryString$$($q_queries$$) {
    $q_queries$$ = $$$$1$$.isArray($q_queries$$) ? $q_queries$$ : [$q_queries$$];
    var $str$$12$$ = "", $query$$3$$, $exp_value$$66$$, $i$$73$$, $prop$$46$$;
    for ($i$$73$$ = 0;$i$$73$$ < $q_queries$$.length;$i$$73$$++) {
      $query$$3$$ = $q_queries$$[$i$$73$$];
      for ($prop$$46$$ in $query$$3$$) {
        if ($query$$3$$.hasOwnProperty($prop$$46$$)) {
          for (var $val$$18$$ = $$$$1$$.isArray($query$$3$$[$prop$$46$$]) ? $query$$3$$[$prop$$46$$] : [$query$$3$$[$prop$$46$$]], $j$$4$$ = 0;$j$$4$$ < $val$$18$$.length;$j$$4$$++) {
            if ($oj$$1$$.$Model$.$IsComplexValue$($val$$18$$[$j$$4$$])) {
              $exp_value$$66$$ = $val$$18$$[$j$$4$$].value;
              var $comparator$$6_compare$$ = null, $comparator$$6_compare$$ = $val$$18$$[$j$$4$$].comparator, $comparator$$6_compare$$ = $$$$1$$.isFunction($comparator$$6_compare$$) ? $comparator$$6_compare$$(null, $prop$$46$$, $exp_value$$66$$) : $comparator$$6_compare$$;
              $exp_value$$66$$ = $prop$$46$$ + $comparator$$6_compare$$ + $exp_value$$66$$;
            } else {
              $exp_value$$66$$ = $prop$$46$$ + "\x3d" + $query$$3$$[$prop$$46$$];
            }
            $str$$12$$ += $exp_value$$66$$ + "+";
          }
        }
      }
      $str$$12$$ = $str$$12$$.substring(0, $str$$12$$.length - 1) + ",";
    }
    return "," === $str$$12$$.substring($str$$12$$.length - 1) ? $str$$12$$.substring(0, $str$$12$$.length - 1) : $str$$12$$;
  };
  $oj$$1$$.$Collection$.prototype.$ModifyOptionsForCustomURL$ = function $$oj$$1$$$$Collection$$$$ModifyOptionsForCustomURL$$($attrs$$17_comparator$$7_options$$95$$) {
    var $opt$$16$$ = {}, $i$$74_prop$$47$$;
    for ($i$$74_prop$$47$$ in $attrs$$17_comparator$$7_options$$95$$) {
      $attrs$$17_comparator$$7_options$$95$$.hasOwnProperty($i$$74_prop$$47$$) && ($opt$$16$$[$i$$74_prop$$47$$] = $attrs$$17_comparator$$7_options$$95$$[$i$$74_prop$$47$$]);
    }
    if (($attrs$$17_comparator$$7_options$$95$$ = this.comparator) && $oj$$1$$.$StringUtils$.$isString$($attrs$$17_comparator$$7_options$$95$$)) {
      $attrs$$17_comparator$$7_options$$95$$ = this.$_getSortAttrs$($attrs$$17_comparator$$7_options$$95$$);
      for ($i$$74_prop$$47$$ = 0;$i$$74_prop$$47$$ < $attrs$$17_comparator$$7_options$$95$$.length;$i$$74_prop$$47$$++) {
        $opt$$16$$.sort = 0 === $i$$74_prop$$47$$ ? $attrs$$17_comparator$$7_options$$95$$[$i$$74_prop$$47$$] : $opt$$16$$.sort + ("," + $attrs$$17_comparator$$7_options$$95$$[$i$$74_prop$$47$$]);
      }
      $opt$$16$$.sortDir = this.$_getSortDirStr$();
    }
    this.$IsVirtual$() && ($opt$$16$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getFetchSize$($opt$$16$$));
    return $opt$$16$$;
  };
  $oj$$1$$.$Collection$.prototype.$IsUrlBased$ = function $$oj$$1$$$$Collection$$$$IsUrlBased$$() {
    if ($$$$1$$.isFunction(this.customURL)) {
      return!0;
    }
    var $url$$19$$ = this.$GetCollectionFetchUrl$(null);
    return $oj$$1$$.$Collection$.$_defined$($url$$19$$);
  };
  $oj$$1$$.$Collection$.prototype.$GetCollectionFetchUrl$ = function $$oj$$1$$$$Collection$$$$GetCollectionFetchUrl$$($attrs$$18_comparator$$8_options$$97_queryString$$) {
    var $url$$20$$ = $oj$$1$$.$Model$.$GetPropValue$(this, "url");
    if (this.$IsVirtual$()) {
      var $all_sortDirStr$$ = $attrs$$18_comparator$$8_options$$97_queryString$$.all, $i$$75_limit$$4_totalResults$$3$$ = null;
      $i$$75_limit$$4_totalResults$$3$$ = $all_sortDirStr$$ ? ($i$$75_limit$$4_totalResults$$3$$ = this.totalResults) ? $i$$75_limit$$4_totalResults$$3$$ : this.$_getFetchSize$($attrs$$18_comparator$$8_options$$97_queryString$$) : this.$_getFetchSize$($attrs$$18_comparator$$8_options$$97_queryString$$);
      $url$$20$$ = $url$$20$$ && -1 < $url$$20$$.indexOf("?") ? $url$$20$$ + "\x26" : $url$$20$$ + "?";
      $url$$20$$ += "limit\x3d" + $i$$75_limit$$4_totalResults$$3$$;
      $all_sortDirStr$$ || ($oj$$1$$.$Collection$.$_defined$($attrs$$18_comparator$$8_options$$97_queryString$$.startIndex) && ($url$$20$$ += "\x26offset\x3d" + $attrs$$18_comparator$$8_options$$97_queryString$$.startIndex), $attrs$$18_comparator$$8_options$$97_queryString$$.startID && ($url$$20$$ += "\x26fromID\x3d" + $attrs$$18_comparator$$8_options$$97_queryString$$.startID), $attrs$$18_comparator$$8_options$$97_queryString$$.since && ($url$$20$$ += "\x26since\x3d" + $attrs$$18_comparator$$8_options$$97_queryString$$.since), 
      $attrs$$18_comparator$$8_options$$97_queryString$$.until && ($url$$20$$ += "\x26until\x3d" + $attrs$$18_comparator$$8_options$$97_queryString$$.until));
      $attrs$$18_comparator$$8_options$$97_queryString$$.query && ($attrs$$18_comparator$$8_options$$97_queryString$$ = $oj$$1$$.$Collection$.$_getQueryString$($attrs$$18_comparator$$8_options$$97_queryString$$.query)) && 0 < $attrs$$18_comparator$$8_options$$97_queryString$$.length && ($url$$20$$ += "\x26q\x3d" + $attrs$$18_comparator$$8_options$$97_queryString$$);
      if (($attrs$$18_comparator$$8_options$$97_queryString$$ = this.comparator) && $oj$$1$$.$StringUtils$.$isString$($attrs$$18_comparator$$8_options$$97_queryString$$)) {
        for ($attrs$$18_comparator$$8_options$$97_queryString$$ = this.$_getSortAttrs$($attrs$$18_comparator$$8_options$$97_queryString$$), $all_sortDirStr$$ = this.$_getSortDirStr$(), $i$$75_limit$$4_totalResults$$3$$ = 0;$i$$75_limit$$4_totalResults$$3$$ < $attrs$$18_comparator$$8_options$$97_queryString$$.length;$i$$75_limit$$4_totalResults$$3$$++) {
          $url$$20$$ = 0 === $i$$75_limit$$4_totalResults$$3$$ ? $url$$20$$ + ("\x26orderBy\x3d" + $attrs$$18_comparator$$8_options$$97_queryString$$[$i$$75_limit$$4_totalResults$$3$$] + ":" + $all_sortDirStr$$) : $url$$20$$ + ("," + $attrs$$18_comparator$$8_options$$97_queryString$$[$i$$75_limit$$4_totalResults$$3$$] + ":" + $all_sortDirStr$$);
        }
      }
      $url$$20$$ += "\x26totalResults\x3dtrue";
    }
    return $url$$20$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getSortDirStr$ = function $$oj$$1$$$$Collection$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "desc" : "asc";
  };
  $oj$$1$$.$Collection$.prototype.sync = function $$oj$$1$$$$Collection$$$sync$($method$$5$$, $collection$$28$$, $options$$98$$) {
    return window.oj.sync($method$$5$$, $collection$$28$$, $options$$98$$);
  };
  $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$ = "fetchSize";
  $oj$$1$$.$RestImpl$ = function $$oj$$1$$$$RestImpl$$($rootURL$$, $custom$$1$$) {
    this.$rootURL$ = $rootURL$$;
    this.$customURL$ = $custom$$1$$;
    $$$$1$$.support.cors = !0;
  };
  $oj$$1$$.$RestImpl$.$_HEADER_PROP$ = "headers";
  $oj$$1$$.$RestImpl$.$addOptions$ = function $$oj$$1$$$$RestImpl$$$addOptions$$($starter$$, $options$$99$$, $customOptions$$) {
    var $prop$$48$$;
    $starter$$ = $$$$1$$.extend(!0, $starter$$, $customOptions$$);
    for ($prop$$48$$ in $options$$99$$) {
      $options$$99$$.hasOwnProperty($prop$$48$$) && "oauthHeader" !== $prop$$48$$ && ($starter$$.hasOwnProperty($prop$$48$$) || ($starter$$[$prop$$48$$] = $options$$99$$[$prop$$48$$]), $prop$$48$$ === $oj$$1$$.$RestImpl$.$_HEADER_PROP$ && ($starter$$[$prop$$48$$] = $$$$1$$.extend(!0, $starter$$[$prop$$48$$], $options$$99$$[$prop$$48$$])));
    }
    if ($options$$99$$.oauthHeader) {
      for ($prop$$48$$ in $starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {}), $options$$99$$.oauthHeader) {
        $options$$99$$.oauthHeader.hasOwnProperty($prop$$48$$) && ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$].hasOwnProperty($prop$$48$$) || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$][$prop$$48$$] = $options$$99$$.oauthHeader[$prop$$48$$]));
      }
    }
    return $starter$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecords$ = function $$oj$$1$$$$RestImpl$$$$getRecords$$($ajaxOptions$$1_callback$$76$$, $errFunc$$1$$, $options$$100$$, $context$$26$$) {
    $options$$100$$ = $options$$100$$ || {};
    var $isJsonp$$ = "jsonp" === $options$$100$$.dataType, $urlInfo$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, null, $context$$26$$, $options$$100$$);
    $ajaxOptions$$1_callback$$76$$ = {crossDomain:$options$$100$$.crossDomain || !$isJsonp$$, dataType:this.$_getDataType$($options$$100$$), jsonpCallback:$options$$100$$.jsonpCallback, context:null !== $context$$26$$ ? $context$$26$$ : this, success:$ajaxOptions$$1_callback$$76$$, error:$errFunc$$1$$};
    $ajaxOptions$$1_callback$$76$$ = this.$_addHeaderProp$($ajaxOptions$$1_callback$$76$$);
    $ajaxOptions$$1_callback$$76$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$1_callback$$76$$, $options$$100$$, $urlInfo$$);
    $options$$100$$.xhr = this.ajax($ajaxOptions$$1_callback$$76$$);
    return $options$$100$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$_addHeaderProp$ = function $$oj$$1$$$$RestImpl$$$$_addHeaderProp$$($options$$101$$) {
    $options$$101$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {"Accept-Language":this.$getLocale$()};
    return $options$$101$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecord$ = function $$oj$$1$$$$RestImpl$$$$getRecord$$($ajaxOptions$$2_success$$14$$, $error$$12$$, $recordID$$1_urlInfo$$1$$, $options$$102$$, $context$$27$$) {
    $options$$102$$ = $options$$102$$ || {};
    var $isJsonp$$1$$ = "jsonp" === $options$$102$$.dataType;
    $recordID$$1_urlInfo$$1$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, $recordID$$1_urlInfo$$1$$, $context$$27$$, $options$$102$$);
    $ajaxOptions$$2_success$$14$$ = {crossDomain:$options$$102$$.crossDomain || !$isJsonp$$1$$, dataType:this.$_getDataType$($options$$102$$), jsonpCallback:$options$$102$$.jsonpCallback, context:null !== $context$$27$$ ? $context$$27$$ : this, success:$ajaxOptions$$2_success$$14$$, error:$error$$12$$};
    $ajaxOptions$$2_success$$14$$ = this.$_addHeaderProp$($ajaxOptions$$2_success$$14$$);
    $ajaxOptions$$2_success$$14$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$2_success$$14$$, $options$$102$$, $recordID$$1_urlInfo$$1$$);
    $options$$102$$.xhr = this.ajax($ajaxOptions$$2_success$$14$$);
    return $options$$102$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$updateRecord$ = function $$oj$$1$$$$RestImpl$$$$updateRecord$$($ajaxOptions$$3_callback$$77$$, $recordID$$2_urlInfo$$2$$, $record$$1$$, $error$$13$$, $options$$103$$, $context$$28$$, $emulateHTTP_patch$$1$$) {
    $options$$103$$ = $options$$103$$ || {};
    var $isJsonp$$2$$ = "jsonp" === $options$$103$$.dataType;
    $recordID$$2_urlInfo$$2$$ = this.$_getURL$($emulateHTTP_patch$$1$$ ? "patch" : "update", this.$rootURL$, this.$customURL$, $recordID$$2_urlInfo$$2$$, $context$$28$$, $options$$103$$);
    $emulateHTTP_patch$$1$$ = $oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$103$$);
    $ajaxOptions$$3_callback$$77$$ = {crossDomain:$options$$103$$.crossDomain || !$isJsonp$$2$$, contentType:this.$_getContentType$($options$$103$$), dataType:this.$_getDataType$($options$$103$$), jsonpCallback:$options$$103$$.jsonpCallback, data:this.$_getData$(JSON.stringify($record$$1$$), $options$$103$$, $recordID$$2_urlInfo$$2$$), emulateHTTP:$emulateHTTP_patch$$1$$, emulateJSON:$oj$$1$$.$RestImpl$.$_emulateJSON$($options$$103$$), success:$ajaxOptions$$3_callback$$77$$, error:$error$$13$$, context:null !== 
    $context$$28$$ ? $context$$28$$ : this};
    $ajaxOptions$$3_callback$$77$$ = this.$_addHeaderProp$($ajaxOptions$$3_callback$$77$$);
    $ajaxOptions$$3_callback$$77$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$3_callback$$77$$, $options$$103$$, $recordID$$2_urlInfo$$2$$);
    $ajaxOptions$$3_callback$$77$$ = $oj$$1$$.$RestImpl$.$_beforeSendMod$($emulateHTTP_patch$$1$$, $ajaxOptions$$3_callback$$77$$);
    $options$$103$$.xhr = this.ajax($ajaxOptions$$3_callback$$77$$);
    return $options$$103$$.xhr;
  };
  $oj$$1$$.$RestImpl$.$_beforeSendMod$ = function $$oj$$1$$$$RestImpl$$$_beforeSendMod$$($emulateHTTP$$1$$, $options$$104$$) {
    if ($emulateHTTP$$1$$) {
      var $beforeSend$$ = $options$$104$$.beforeSend;
      $options$$104$$.beforeSend = function $$options$$104$$$beforeSend$($xhr$$19$$) {
        $xhr$$19$$.setRequestHeader("X-HTTP-Method-Override", $options$$104$$.$_method$);
        if ($beforeSend$$) {
          return $beforeSend$$.apply(this, arguments);
        }
      };
    }
    return $options$$104$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getData$ = function $$oj$$1$$$$RestImpl$$$$_getData$$($data$$40$$, $options$$105_retObj$$9$$, $urlInfo$$3$$) {
    return $oj$$1$$.$RestImpl$.$_emulateJSON$($options$$105_retObj$$9$$) ? ($options$$105_retObj$$9$$ = {_method:$urlInfo$$3$$.$_method$ ? $urlInfo$$3$$.$_method$ : $urlInfo$$3$$.type}, $data$$40$$ && ($options$$105_retObj$$9$$.model = $data$$40$$), $options$$105_retObj$$9$$) : $data$$40$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getHTTPMethod$ = function $$oj$$1$$$$RestImpl$$$$_getHTTPMethod$$($operation$$1$$, $options$$106$$) {
    if ($options$$106$$.type) {
      return{method:$options$$106$$.type};
    }
    var $method$$6$$ = null;
    "create" === $operation$$1$$ && ($method$$6$$ = "POST");
    "delete" === $operation$$1$$ && ($method$$6$$ = "DELETE");
    "patch" === $operation$$1$$ && ($method$$6$$ = "PATCH");
    "update" === $operation$$1$$ && ($method$$6$$ = "PUT");
    if ($oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$106$$)) {
      var $retObj$$10$$ = {method:"POST"};
      $retObj$$10$$.$_method$ = $method$$6$$;
      return $retObj$$10$$;
    }
    null === $method$$6$$ && ($method$$6$$ = "GET");
    return{method:$method$$6$$};
  };
  $oj$$1$$.$RestImpl$.$_emulateHTTP$ = function $$oj$$1$$$$RestImpl$$$_emulateHTTP$$($options$$107$$) {
    return $options$$107$$.emulateHTTP || $oj$$1$$.emulateHTTP;
  };
  $oj$$1$$.$RestImpl$.$_emulateJSON$ = function $$oj$$1$$$$RestImpl$$$_emulateJSON$$($options$$108$$) {
    return $options$$108$$.emulateJSON || $oj$$1$$.emulateJSON;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getURL$ = function $$oj$$1$$$$RestImpl$$$$_getURL$$($operation$$2_result$$1$$, $retObj$$11_rootURL$$1$$, $customURL$$2$$, $recordID$$3$$, $context$$29$$, $options$$109$$) {
    var $httpMethod$$ = this.$_getHTTPMethod$($operation$$2_result$$1$$, $options$$109$$);
    if ($$$$1$$.isFunction($customURL$$2$$)) {
      $operation$$2_result$$1$$ = $customURL$$2$$.call(this, $operation$$2_result$$1$$, $context$$29$$, $oj$$1$$.$Model$.$SetCustomURLOptions$($recordID$$3$$, $context$$29$$, $options$$109$$));
      if ($oj$$1$$.$StringUtils$.$isString$($operation$$2_result$$1$$)) {
        return $retObj$$11_rootURL$$1$$ = {url:$operation$$2_result$$1$$, type:$httpMethod$$.method}, $httpMethod$$.$_method$ && ($retObj$$11_rootURL$$1$$.$_method$ = $httpMethod$$.$_method$), $retObj$$11_rootURL$$1$$;
      }
      if ($operation$$2_result$$1$$) {
        return $operation$$2_result$$1$$.url = $operation$$2_result$$1$$.hasOwnProperty("url") ? $operation$$2_result$$1$$.url : $retObj$$11_rootURL$$1$$, $operation$$2_result$$1$$.hasOwnProperty("type") || ($operation$$2_result$$1$$.type = $httpMethod$$.method), !$operation$$2_result$$1$$.hasOwnProperty("data") && $httpMethod$$.$_method$ && ($operation$$2_result$$1$$.$_method$ = $httpMethod$$.$_method$), $operation$$2_result$$1$$;
      }
    }
    $retObj$$11_rootURL$$1$$ = {url:$oj$$1$$.$Model$.$GetPropValue$(null, $retObj$$11_rootURL$$1$$), type:$httpMethod$$.method};
    $httpMethod$$.$_method$ && ($retObj$$11_rootURL$$1$$.$_method$ = $httpMethod$$.$_method$);
    return $retObj$$11_rootURL$$1$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$deleteRecord$ = function $$oj$$1$$$$RestImpl$$$$deleteRecord$$($recordID$$4_urlInfo$$4$$, $ajaxOptions$$4_error$$14$$, $options$$110$$, $context$$30_data$$41$$) {
    $options$$110$$ = $options$$110$$ || {};
    var $isJsonp$$3$$ = "jsonp" === $options$$110$$.dataType;
    $recordID$$4_urlInfo$$4$$ = this.$_getURL$("delete", this.$rootURL$, this.$customURL$, $recordID$$4_urlInfo$$4$$, $context$$30_data$$41$$, $options$$110$$);
    var $emulateHTTP$$2$$ = $oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$110$$);
    $ajaxOptions$$4_error$$14$$ = {crossDomain:$options$$110$$.crossDomain || !$isJsonp$$3$$, success:$options$$110$$.success, error:$ajaxOptions$$4_error$$14$$, context:null !== $context$$30_data$$41$$ ? $context$$30_data$$41$$ : this, emulateHTTP:$emulateHTTP$$2$$, emulateJSON:$oj$$1$$.$RestImpl$.$_emulateJSON$($options$$110$$)};
    ($context$$30_data$$41$$ = this.$_getData$(null, $options$$110$$, $recordID$$4_urlInfo$$4$$)) && ($ajaxOptions$$4_error$$14$$.data = $context$$30_data$$41$$);
    $ajaxOptions$$4_error$$14$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$4_error$$14$$, $options$$110$$, $recordID$$4_urlInfo$$4$$);
    $ajaxOptions$$4_error$$14$$ = $oj$$1$$.$RestImpl$.$_beforeSendMod$($emulateHTTP$$2$$, $ajaxOptions$$4_error$$14$$);
    $options$$110$$.xhr = this.ajax($ajaxOptions$$4_error$$14$$);
    return $options$$110$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$addRecord$ = function $$oj$$1$$$$RestImpl$$$$addRecord$$($record$$2_urlInfo$$5$$, $ajaxOptions$$5_error$$15$$, $options$$111$$, $context$$31$$) {
    $options$$111$$ = $options$$111$$ || {};
    var $recordStr$$ = JSON.stringify($record$$2_urlInfo$$5$$), $isJsonp$$4$$ = "jsonp" === $options$$111$$.dataType;
    $record$$2_urlInfo$$5$$ = this.$_getURL$("create", this.$rootURL$, this.$customURL$, null, $context$$31$$, $options$$111$$);
    var $emulateHTTP$$3$$ = $oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$111$$);
    $ajaxOptions$$5_error$$15$$ = {crossDomain:$options$$111$$.crossDomain || !$isJsonp$$4$$, contentType:$options$$111$$.contentType || "application/json", dataType:this.$_getDataType$($options$$111$$), jsonpCallback:$options$$111$$.jsonpCallback, data:this.$_getData$($recordStr$$, $options$$111$$, $record$$2_urlInfo$$5$$), success:$options$$111$$.success, error:$ajaxOptions$$5_error$$15$$, emulateHTTP:$emulateHTTP$$3$$, emulateJSON:$oj$$1$$.$RestImpl$.$_emulateJSON$($options$$111$$), context:null !== 
    $context$$31$$ ? $context$$31$$ : this};
    $ajaxOptions$$5_error$$15$$ = this.$_addHeaderProp$($ajaxOptions$$5_error$$15$$);
    $ajaxOptions$$5_error$$15$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$5_error$$15$$, $options$$111$$, $record$$2_urlInfo$$5$$);
    $options$$111$$.xhr = this.ajax($ajaxOptions$$5_error$$15$$);
    return $options$$111$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getDataType$ = function $$oj$$1$$$$RestImpl$$$$_getDataType$$($options$$112$$) {
    return $oj$$1$$.$RestImpl$.$_emulateJSON$($options$$112$$) && !$oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$112$$) ? "application/x-www-form-urlencoded" : $options$$112$$.dataType || "json";
  };
  $oj$$1$$.$RestImpl$.prototype.$_getContentType$ = function $$oj$$1$$$$RestImpl$$$$_getContentType$$($options$$113$$) {
    return $oj$$1$$.$RestImpl$.$_emulateJSON$($options$$113$$) && !$oj$$1$$.$RestImpl$.$_emulateHTTP$($options$$113$$) ? "application/x-www-form-urlencoded" : $options$$113$$.contentType || "application/json";
  };
  $oj$$1$$.$RestImpl$.prototype.$getLocale$ = function $$oj$$1$$$$RestImpl$$$$getLocale$$() {
    return $oj$$1$$.$Config$.$getLocale$();
  };
  $oj$$1$$.$RestImpl$.prototype.ajax = function $$oj$$1$$$$RestImpl$$$ajax$($settings$$3$$) {
    if (null === $settings$$3$$.url || void 0 === $settings$$3$$.url) {
      throw new $oj$$1$$.$URLError$;
    }
    return window.oj.ajax($settings$$3$$);
  };
  $oj$$1$$.$OAuth$ = function $$oj$$1$$$$OAuth$$($header$$2$$, $attributes$$8$$) {
    $attributes$$8$$ = $attributes$$8$$ || {};
    $oj$$1$$.$OAuth$._init(this, $attributes$$8$$, $header$$2$$ || "Authorization");
  };
  $goog$exportPath_$$("OAuth", $oj$$1$$.$OAuth$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$OAuth$, $oj$$1$$.$Object$, "oj.OAuth");
  $oj$$1$$.$OAuth$.prototype.Init = function $$oj$$1$$$$OAuth$$$Init$() {
    $oj$$1$$.$OAuth$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$OAuth$.prototype.$getHeader$ = function $$oj$$1$$$$OAuth$$$$getHeader$$() {
    var $headers$$ = {};
    this.$accessTokenResponse$.access_token || this.$clientCredentialGrant$();
    $headers$$[this.$accessTokenRequest$.$auth_header$] = "Bearer " + this.$accessTokenResponse$.access_token;
    return $headers$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getHeader", {$getHeader$:$oj$$1$$.$OAuth$.prototype.$getHeader$});
  $oj$$1$$.$OAuth$.prototype.$isInitialized$ = function $$oj$$1$$$$OAuth$$$$isInitialized$$() {
    return this.$accessTokenResponse$.$access_token$ ? !0 : !1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.isInitialized", {$isInitialized$:$oj$$1$$.$OAuth$.prototype.$isInitialized$});
  $oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$ = function $$oj$$1$$$$OAuth$$$$clientCredentialGrant$$() {
    var $headers$$1$$ = {}, $self$$30$$ = this;
    $headers$$1$$[$self$$30$$.$accessTokenRequest$.$auth_header$] = "Basic " + $oj$$1$$.$OAuth$.$_base64_encode$($self$$30$$.$accessTokenRequest$.client_id + ":" + $self$$30$$.$accessTokenRequest$.client_secret);
    $$$$1$$.ajax({type:"POST", async:!1, url:this.$accessTokenRequest$.bearer_url, data:"grant_type\x3dclient_credentials", headers:$headers$$1$$, success:function($data$$42$$) {
      $oj$$1$$.$OAuth$.$_initAccessToken$($self$$30$$.$accessTokenResponse$, $data$$42$$);
    }, error:function($jqXHR$$1$$) {
      throw Error($jqXHR$$1$$.responseText);
    }});
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.clientCredentialGrant", {$clientCredentialGrant$:$oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenResponse$$($data$$43$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenResponse$, $data$$43$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenResponse", {$setAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$getAccessTokenResponse$$() {
    return this.$accessTokenResponse$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenResponse", {$getAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenResponse$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenResponse$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenResponse", {$cleanAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenRequest$$($data$$44$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenRequest$, $data$$44$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenRequest", {$setAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$getAccessTokenRequest$$() {
    return this.$accessTokenRequest$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenRequest", {$getAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenRequest$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenRequest$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenRequest", {$cleanAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$});
  $oj$$1$$.$OAuth$._init = function $$oj$$1$$$$OAuth$$_init$($oauth$$, $attributes$$9$$, $header$$3$$) {
    $oauth$$.Init();
    $oauth$$.$accessTokenRequest$ = {};
    $oauth$$.$accessTokenResponse$ = {};
    $attributes$$9$$.access_token ? $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenResponse$, $attributes$$9$$) : $attributes$$9$$.client_id && $attributes$$9$$.client_secret && $attributes$$9$$.bearer_url && $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenRequest$, $attributes$$9$$);
    $oauth$$.$accessTokenRequest$.$auth_header$ = $header$$3$$;
  };
  $oj$$1$$.$OAuth$.$_initAccessToken$ = function $$oj$$1$$$$OAuth$$$_initAccessToken$$($oauthObj$$, $data$$45$$) {
    var $prop$$49$$;
    $data$$45$$ = $data$$45$$ || {};
    for ($prop$$49$$ in $data$$45$$) {
      $oauthObj$$[$prop$$49$$] = $data$$45$$[$prop$$49$$];
    }
  };
  $oj$$1$$.$OAuth$.$_cleanAccessToken$ = function $$oj$$1$$$$OAuth$$$_cleanAccessToken$$($oauthObj$$1$$) {
    for (var $key$$25$$ in $oauthObj$$1$$) {
      $oauthObj$$1$$.hasOwnProperty($key$$25$$) && "auth_header" !== $key$$25$$ && ($oauthObj$$1$$[$key$$25$$] = null, delete $oauthObj$$1$$[$key$$25$$]);
    }
  };
  $oj$$1$$.$OAuth$.$_base64_encode$ = function $$oj$$1$$$$OAuth$$$_base64_encode$$($a$$87$$) {
    var $d$$, $e$$27$$, $f$$, $b$$49$$, $g$$ = 0, $h$$4$$ = 0, $c$$26$$ = [];
    do {
      $d$$ = $a$$87$$.charCodeAt($g$$++), $e$$27$$ = $a$$87$$.charCodeAt($g$$++), $f$$ = $a$$87$$.charCodeAt($g$$++), $b$$49$$ = $d$$ << 16 | $e$$27$$ << 8 | $f$$, $d$$ = $b$$49$$ >> 18 & 63, $e$$27$$ = $b$$49$$ >> 12 & 63, $f$$ = $b$$49$$ >> 6 & 63, $b$$49$$ &= 63, $c$$26$$[$h$$4$$++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($d$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($e$$27$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($f$$) + 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($b$$49$$);
    } while ($g$$ < $a$$87$$.length);
    $c$$26$$ = $c$$26$$.join("");
    $d$$ = $a$$87$$.length % 3;
    return($d$$ ? $c$$26$$.slice(0, $d$$ - 3) : $c$$26$$) + "\x3d\x3d\x3d".slice($d$$ || 3);
  };
});
