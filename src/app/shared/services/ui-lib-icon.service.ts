import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UILibIconService {

  iconList = [
    { 'name': 'ulb_monitor', 'fileName': 'monitor.svg' },
    { 'name': 'ulb_money', 'fileName': 'money.svg' },
    { 'name': 'ulb_home_security', 'fileName': 'home_security.svg' },
    { 'name': 'ulb_paper_plane', 'fileName': 'paper_plane.svg' },
    { 'name': 'ulb_menu', 'fileName': 'menu.svg' },
    { 'name': 'ulb_home', 'fileName': 'home.svg' },
    { 'name': 'ulb_documents', 'fileName': 'documents.svg' },
    { 'name': 'ulb_edit', 'fileName': 'edit.svg' },
    { 'name': 'ulb_boss', 'fileName': 'boss.svg' },
    { 'name': 'ulb_partnership', 'fileName': 'partnership.svg' },
    { 'name': 'ulb_partnership_1', 'fileName': 'partnership_1.svg' },
    { 'name': 'ulb_success', 'fileName': 'success.svg' },
    { 'name': 'ulb_rocket_launch', 'fileName': 'rocket_launch.svg' },
    { 'name': 'ulb_rocket', 'fileName': 'rocket.svg' },
    { 'name': 'ulb_business_and_trade', 'fileName': 'business_and_trade.svg' },
    { 'name': 'ulb_enterprise', 'fileName': 'enterprise.svg' },
    { 'name': 'ulb_cloud_computing', 'fileName': 'cloud_computing.svg' },
    { 'name': 'ulb_cloud_computing_1', 'fileName': 'cloud_computing_1.svg' },
    { 'name': 'ulb_cloud_computing_2', 'fileName': 'cloud_computing_2.svg' },
    { 'name': 'ulb_send', 'fileName': 'send.svg' },
    { 'name': 'ulb_table', 'fileName': 'table.svg' },
    { 'name': 'ulb_notification', 'fileName': 'notification.svg' },
    { 'name': 'ulb_person', 'fileName': 'person.svg' },
    { 'name': 'ulb_menu_1', 'fileName': 'menu_1.svg' },
    { 'name': 'ulb_delete', 'fileName': 'delete.svg' },
    { 'name': 'ulb_close', 'fileName': 'close.svg' },
    { 'name': 'ulb_magnifying_glass', 'fileName': 'magnifying_glass.svg' },
    { 'name': 'ulb_settings', 'fileName': 'settings.svg' },
    { 'name': 'ulb_twitter', 'fileName': 'twitter.svg' },
    { 'name': 'ulb_facebook', 'fileName': 'facebook.svg' },
    { 'name': 'ulb_linkedin', 'fileName': 'linkedin.svg' },
    { 'name': 'ulb_pie_chart', 'fileName': 'pie_chart.svg' },
    { 'name': 'ulb_paint_palette', 'fileName': 'paint_palette.svg' },
    { 'name': 'ulb_server', 'fileName': 'server.svg' },
    { 'name': 'ulb_database', 'fileName': 'database.svg' },
    { 'name': 'ulb_database_1', 'fileName': 'database_1.svg' },
    { 'name': 'ulb_creativity', 'fileName': 'creativity.svg' },
    { 'name': 'ulb_list_text', 'fileName': 'list_text.svg' },
    { 'name': 'ulb_list', 'fileName': 'list.svg' },
    { 'name': 'ulb_shopping_list', 'fileName': 'shopping_list.svg' },
    { 'name': 'ulb_checklist', 'fileName': 'checklist.svg' },
    { 'name': 'ulb_bullet_list', 'fileName': 'bullet_list.svg' },
    { 'name': 'ulb_shopping_cart', 'fileName': 'shopping_cart.svg' },
    { 'name': 'ulb_add', 'fileName': 'add.svg' },
    { 'name': 'ulb_shopping_cart_1', 'fileName': 'shopping_cart_1.svg' },
    { 'name': 'ulb_shopping_basket', 'fileName': 'shopping_basket.svg' },
    { 'name': 'ulb_edit_table', 'fileName': 'edit_table.svg' },
    { 'name': 'ulb_casino_chips', 'fileName': 'casino_chips.svg' },
    { 'name': 'ulb_add_1', 'fileName': 'add_1.svg' },
    { 'name': 'ulb_chat', 'fileName': 'chat.svg' },
    { 'name': 'ulb_chat_box', 'fileName': 'chat_box.svg' },
    { 'name': 'ulb_chat_1', 'fileName': 'chat_1.svg' },
    { 'name': 'ulb_agreement', 'fileName': 'agreement.svg' },
    { 'name': 'ulb_box', 'fileName': 'box.svg' },
    { 'name': 'ulb_link_1', 'fileName': 'link_1.svg' },
    { 'name': 'ulb_link', 'fileName': 'link.svg' },
    { 'name': 'ulb_message', 'fileName': 'message.svg' },
    { 'name': 'ulb_inbox', 'fileName': 'inbox.svg' },
    { 'name': 'ulb_inbox_1', 'fileName': 'inbox_1.svg' },
    { 'name': 'ulb_invoices', 'fileName': 'invoices.svg' },
    { 'name': 'ulb_receipt', 'fileName': 'receipt.svg' },
    { 'name': 'ulb_search', 'fileName': 'search.svg' },
    { 'name': 'ulb_date', 'fileName': 'date.svg' },
    { 'name': 'ulb_building', 'fileName': 'building.svg' },
    { 'name': 'ulb_block', 'fileName': 'block.svg' },
    { 'name': 'ulb_users', 'fileName': 'users.svg' },
    { 'name': 'ulb_user', 'fileName': 'user.svg' },
    { 'name': 'ulb_map', 'fileName': 'map.svg' },
    { 'name': 'ulb_location', 'fileName': 'location.svg' },
    { 'name': 'ulb_drag', 'fileName': 'drag.svg' },
    {
      'name': 'ulb_business_card_of_a_man_with_contact_info',
      'fileName': 'business_card_of_a_man_with_contact_info.svg'
    },
    { 'name': 'ulb_help', 'fileName': 'help.svg' },
    { 'name': 'ulb_list_1', 'fileName': 'list_1.svg' }
  ]

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  init() {
    this.iconList.forEach(i => {
      this.matIconRegistry.addSvgIcon(
        i.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/images/svg-icons/${i.fileName}`)
      );
    });
  }
}
