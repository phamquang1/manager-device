(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Mhkd:function(t,e,i){"use strict";i.r(e),i.d(e,"MediaModule",(function(){return W}));var a=i("ofXK"),o=i("tyNb"),n=i("rDax"),s=i("+rOU"),r=i("fXoL"),c=i("FKr1"),l=i("cH1L"),d=i("XNiG"),h=i("NXyV"),u=i("LRne"),p=i("pLZG"),m=i("IzEk"),g=i("JX91"),f=i("R0Ic"),_=i("FtGj"),b=i("u47x");function y(t,e){}class v{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0}}const D={dialogContainer:Object(f.n)("dialogContainer",[Object(f.k)("void, exit",Object(f.l)({opacity:0,transform:"scale(0.7)"})),Object(f.k)("enter",Object(f.l)({transform:"none"})),Object(f.m)("* => enter",Object(f.e)("150ms cubic-bezier(0, 0, 0.2, 1)",Object(f.l)({transform:"none",opacity:1}))),Object(f.m)("* => void, * => exit",Object(f.e)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",Object(f.l)({opacity:0})))])};function C(){throw Error("Attempting to attach dialog content after content is already attached")}let w=(()=>{class t extends s.a{constructor(t,e,i,a,o){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=i,this._config=o,this._elementFocusedBeforeDialogWasOpened=null,this._state="enter",this._animationStateChanged=new r.t,this.attachDomPortal=t=>(this._portalOutlet.hasAttached()&&C(),this._setupFocusTrap(),this._portalOutlet.attachDomPortal(t)),this._ariaLabelledBy=o.ariaLabelledBy||null,this._document=a}attachComponentPortal(t){return this._portalOutlet.hasAttached()&&C(),this._setupFocusTrap(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached()&&C(),this._setupFocusTrap(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||this._focusTrap.focusInitialElement()||this._elementRef.nativeElement.focus()}_trapFocus(){this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady():this._containsFocus()||this._elementRef.nativeElement.focus()}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=this._document.activeElement,i=this._elementRef.nativeElement;e&&e!==this._document.body&&e!==i&&!i.contains(e)||t.focus()}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap||(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)),this._document&&(this._elementFocusedBeforeDialogWasOpened=this._document.activeElement,this._elementRef.nativeElement.focus&&Promise.resolve().then(()=>this._elementRef.nativeElement.focus()))}_containsFocus(){const t=this._elementRef.nativeElement,e=this._document.activeElement;return t===e||t.contains(e)}_onAnimationDone(t){"enter"===t.toState?this._trapFocus():"exit"===t.toState&&this._restoreFocus(),this._animationStateChanged.emit(t)}_onAnimationStart(t){this._animationStateChanged.emit(t)}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(e){return new(e||t)(r.yc(r.q),r.yc(b.g),r.yc(r.j),r.yc(a.d,8),r.yc(v))},t.\u0275cmp=r.sc({type:t,selectors:[["mat-dialog-container"]],viewQuery:function(t,e){var i;1&t&&r.jd(s.c,!0),2&t&&r.bd(i=r.Nc())&&(e._portalOutlet=i.first)},hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,e){1&t&&r.qc("@dialogContainer.start",(function(t){return e._onAnimationStart(t)}))("@dialogContainer.done",(function(t){return e._onAnimationDone(t)})),2&t&&(r.mc("id",e._id)("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),r.rd("@dialogContainer",e._state))},features:[r.ic],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&r.ld(0,y,0,0,"ng-template",0)},directives:[s.c],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[D.dialogContainer]}}),t})(),E=0;class O{constructor(t,e,i="mat-dialog-"+E++){this._overlayRef=t,this._containerInstance=e,this.id=i,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new d.a,this._afterClosed=new d.a,this._beforeClosed=new d.a,this._state=0,e._id=i,e._animationStateChanged.pipe(Object(p.a)(t=>"done"===t.phaseName&&"enter"===t.toState),Object(m.a)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(Object(p.a)(t=>"done"===t.phaseName&&"exit"===t.toState),Object(m.a)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),t.keydownEvents().pipe(Object(p.a)(t=>t.keyCode===_.e&&!this.disableClose&&!Object(_.o)(t))).subscribe(t=>{t.preventDefault(),this.close()}),t.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():this.close()})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe(Object(p.a)(t=>"start"===t.phaseName),Object(m.a)(1)).subscribe(e=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._containerInstance._startExitAnimation(),this._state=1}afterOpened(){return this._afterOpened.asObservable()}afterClosed(){return this._afterClosed.asObservable()}beforeClosed(){return this._beforeClosed.asObservable()}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(t){let e=this._getPositionStrategy();return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(t="",e=""){return this._getPositionStrategy().width(t).height(e),this._overlayRef.updatePosition(),this}addPanelClass(t){return this._overlayRef.addPanelClass(t),this}removePanelClass(t){return this._overlayRef.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}const x=new r.w("MatDialogData"),A=new r.w("mat-dialog-default-options"),k=new r.w("mat-dialog-scroll-strategy"),R={provide:k,deps:[n.c],useFactory:function(t){return()=>t.scrollStrategies.block()}};let j=(()=>{class t{constructor(t,e,i,a,o,n,s){this._overlay=t,this._injector=e,this._defaultOptions=a,this._parentDialog=n,this._overlayContainer=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new d.a,this._afterOpenedAtThisLevel=new d.a,this._ariaHiddenElements=new Map,this.afterAllClosed=Object(h.a)(()=>this.openDialogs.length?this._afterAllClosed:this._afterAllClosed.pipe(Object(g.a)(void 0))),this._scrollStrategy=o}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}get _afterAllClosed(){const t=this._parentDialog;return t?t._afterAllClosed:this._afterAllClosedAtThisLevel}open(t,e){if((e=function(t,e){return Object.assign(Object.assign({},e),t)}(e,this._defaultOptions||new v)).id&&this.getDialogById(e.id))throw Error(`Dialog with id "${e.id}" exists already. The dialog id must be unique.`);const i=this._createOverlay(e),a=this._attachDialogContainer(i,e),o=this._attachDialogContent(t,a,i,e);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(o),o.afterClosed().subscribe(()=>this._removeOpenDialog(o)),this.afterOpened.next(o),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new n.d({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachDialogContainer(t,e){const i=r.x.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:v,useValue:e}]}),a=new s.d(w,e.viewContainerRef,i,e.componentFactoryResolver);return t.attach(a).instance}_attachDialogContent(t,e,i,a){const o=new O(i,e,a.id);if(t instanceof r.V)e.attachTemplatePortal(new s.h(t,null,{$implicit:a.data,dialogRef:o}));else{const i=this._createInjector(a,o,e),n=e.attachComponentPortal(new s.d(t,a.viewContainerRef,i));o.componentInstance=n.instance}return o.updateSize(a.width,a.height).updatePosition(a.position),o}_createInjector(t,e,i){const a=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=[{provide:w,useValue:i},{provide:x,useValue:t.data},{provide:O,useValue:e}];return!t.direction||a&&a.get(l.b,null)||o.push({provide:l.b,useValue:{value:t.direction,change:Object(u.a)()}}),r.x.create({parent:a||this._injector,providers:o})}_removeOpenDialog(t){const e=this.openDialogs.indexOf(t);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((t,e)=>{t?e.setAttribute("aria-hidden",t):e.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._afterAllClosed.next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let a=e[i];a===t||"SCRIPT"===a.nodeName||"STYLE"===a.nodeName||a.hasAttribute("aria-live")||(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return t.\u0275fac=function(e){return new(e||t)(r.Ic(n.c),r.Ic(r.x),r.Ic(a.h,8),r.Ic(A,8),r.Ic(k),r.Ic(t,12),r.Ic(n.e))},t.\u0275prov=r.uc({token:t,factory:t.\u0275fac}),t})(),T=0,F=(()=>{class t{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i,this.id="mat-dialog-title-"+T++}ngOnInit(){this._dialogRef||(this._dialogRef=function(t,e){let i=t.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-dialog-container");)i=i.parentElement;return i?e.find(t=>t.id===i.id):null}(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return t.\u0275fac=function(e){return new(e||t)(r.yc(O,8),r.yc(r.q),r.yc(j))},t.\u0275dir=r.tc({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&r.Hc("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.tc({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.tc({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"]}),t})(),L=(()=>{class t{}return t.\u0275mod=r.wc({type:t}),t.\u0275inj=r.vc({factory:function(e){return new(e||t)},providers:[j,R],imports:[[n.f,s.g,c.e],c.e]}),t})(),P=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){console.log(this.data)}save(){this.dialogRef.close(this.data)}close(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(r.yc(O),r.yc(x))},t.\u0275cmp=r.sc({type:t,selectors:[["app-media-dialog"]],decls:12,vars:0,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(t,e){1&t&&(r.Ec(0,"h2",0),r.md(1,"Install Angular"),r.Dc(),r.Ec(2,"mat-dialog-content",1),r.Ec(3,"h3"),r.md(4,"Develop across all platforms"),r.Dc(),r.Ec(5,"p"),r.md(6,"Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop."),r.Dc(),r.Dc(),r.Ec(7,"mat-dialog-actions",2),r.Ec(8,"button",3),r.Mc("click",(function(){return e.save()})),r.md(9,"Save"),r.Dc(),r.Ec(10,"button",4),r.Mc("click",(function(){return e.close()})),r.md(11,"Cancel"),r.Dc(),r.Dc())},directives:[F,S,I],styles:[""]}),t})();var B=i("0MCZ"),N=i("jQpT");const M=[{path:"",component:(()=>{class t{constructor(t){this.dialog=t}ngOnInit(){}openMediaDialog(){const t=new v;t.disableClose=!0,t.autoFocus=!0,t.height="400px",t.width="600px",t.data={id:1,title:"Angular For Beginners"},this.dialog.open(P,t).afterClosed().subscribe(t=>{t&&console.log("Dialog result:",t)})}}return t.\u0275fac=function(e){return new(e||t)(r.yc(j))},t.\u0275cmp=r.sc({type:t,selectors:[["app-media"]],decls:49,vars:0,consts:[[1,"card","m-3","p-3"],[1,"d-flex","justify-content-end","mb-3"],["type","button",1,"btn","btn-primary","mr-1"],["type","button",1,"btn","btn-success","mr-1"],["type","button",1,"btn","btn-danger"],[1,"table"],["scope","col"],["scope","row"],[3,"click"]],template:function(t,e){1&t&&(r.Ec(0,"app-layout"),r.Ec(1,"div",0),r.Ec(2,"div",1),r.Ec(3,"button",2),r.md(4,"Th\xeam m\u1edbi"),r.Dc(),r.Ec(5,"button",3),r.md(6,"S\u1eeda "),r.Dc(),r.Ec(7,"button",4),r.md(8,"X\xf3a"),r.Dc(),r.Dc(),r.Ec(9,"table",5),r.Ec(10,"thead"),r.Ec(11,"tr"),r.Ec(12,"th",6),r.md(13,"ID"),r.Dc(),r.Ec(14,"th",6),r.md(15,"Video"),r.Dc(),r.Ec(16,"th",6),r.md(17,"Name"),r.Dc(),r.Ec(18,"th",6),r.md(19,"Size"),r.Dc(),r.Dc(),r.Dc(),r.Ec(20,"tbody"),r.Ec(21,"tr"),r.Ec(22,"th",7),r.md(23,"1"),r.Dc(),r.Ec(24,"td",8),r.Mc("click",(function(){return e.openMediaDialog()})),r.md(25,"Mark"),r.Dc(),r.Ec(26,"td"),r.md(27,"Otto"),r.Dc(),r.Ec(28,"td"),r.md(29,"@mdo"),r.Dc(),r.Dc(),r.Ec(30,"tr"),r.Ec(31,"th",7),r.md(32,"2"),r.Dc(),r.Ec(33,"td"),r.md(34,"Jacob"),r.Dc(),r.Ec(35,"td"),r.md(36,"Thornton"),r.Dc(),r.Ec(37,"td"),r.md(38,"@fat"),r.Dc(),r.Dc(),r.Ec(39,"tr"),r.Ec(40,"th",7),r.md(41,"3"),r.Dc(),r.Ec(42,"td"),r.md(43,"Larry"),r.Dc(),r.Ec(44,"td"),r.md(45,"the Bird"),r.Dc(),r.Ec(46,"td"),r.md(47,"@twitter"),r.Dc(),r.Dc(),r.Dc(),r.Dc(),r.Dc(),r.zc(48,"app-footer"),r.Dc())},directives:[B.a,N.a],styles:[""]}),t})()}];let V=(()=>{class t{}return t.\u0275mod=r.wc({type:t}),t.\u0275inj=r.vc({factory:function(e){return new(e||t)},imports:[[o.e.forChild(M)],o.e]}),t})();var H=i("PCNd"),z=i("bTqV");let W=(()=>{class t{}return t.\u0275mod=r.wc({type:t}),t.\u0275inj=r.vc({factory:function(e){return new(e||t)},imports:[[a.c,V,L,z.c,H.a]]}),t})()}}]);